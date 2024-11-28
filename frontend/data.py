"""
This script demonstrates how to plot stock prices with moving averages
using a sample dataset. It includes calculations for 7-day and 14-day
moving averages and visualizes the results with matplotlib.
"""

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np  # Import numpy

# Sample data (Replace with actual dataset)
data = pd.DataFrame({
    'date': pd.date_range(start='2023-01-01', periods=100),
    'closing_price': np.random.randint(100, 200, size=100),
    'volume': np.random.randint(1000, 5000, size=100)
})

# Calculate Moving Averages
data['7_day_MA'] = data['closing_price'].rolling(window=7).mean()
data['14_day_MA'] = data['closing_price'].rolling(window=14).mean()

# Plot Closing Price and Moving Averages
plt.figure(figsize=(12, 6))
plt.plot(data['date'], data['closing_price'], label='Closing Price', color='blue')
plt.plot(data['date'], data['7_day_MA'], label='7-Day MA', color='orange')
plt.plot(data['date'], data['14_day_MA'], label='14-Day MA', color='green')
plt.xlabel('Date')
plt.ylabel('Price')
plt.title('Stock Price with Moving Averages')
plt.legend()
plt.show()
