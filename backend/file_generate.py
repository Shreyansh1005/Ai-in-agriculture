import pandas as pd

# Sample data
data = {
    "temperature": [20, 25, 30, 22, 28],
    "humidity": [50, 60, 70, 55, 65],
    "rainfall": [200, 150, 100, 180, 120],
    "yield": [3.0, 5.5, 2.0, 8.2, 4.8]
}

# Create DataFrame
df = pd.DataFrame(data)

# Save to pickle file
df.to_pickle('crop_sample.pkl')
