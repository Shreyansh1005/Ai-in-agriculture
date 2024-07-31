from flask import Flask, request, jsonify, render_template
import pandas as pd
import numpy as np
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the sample data from the pickle file
data_file_path = 'crop_sample.pkl'
df = pd.read_pickle('crop_sample.pkl')


# Dummy function to simulate prediction (replace with your actual model and prediction logic)
def predict_crop_yield(features):
    # Example: Here we're just checking the similarity of input features with our sample data
    # Replace this logic with your actual model prediction
    # For demo purposes, we'll return the average yield if features match closely
    if not df.empty:
        # Find the closest matching row in the DataFrame
        df_features = df[['temperature', 'humidity', 'rainfall']]
        df['distance'] = np.sqrt(((df_features - features) ** 2).sum(axis=1))
        closest_row = df.loc[df['distance'].idxmin()]
        return closest_row['yield']
    return None


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        if 'features' not in data:
            raise ValueError("Features not provided in the request")
        features = np.array(data['features'])
        print(f"Received features: {features}")  # Debug statement

        # Perform prediction
        yield_prediction = predict_crop_yield(features)
        print(f"Predicted yield: {yield_prediction}")  # Debug statement

        if yield_prediction is None:
            raise ValueError("Prediction could not be made")

        return jsonify({'prediction': yield_prediction})
    except Exception as e:
        print(f"Error during prediction: {e}")  # Debug statement
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)
