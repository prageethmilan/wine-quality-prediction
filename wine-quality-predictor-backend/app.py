from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

CORS(app, resources={"/*": {"origins": "http://localhost:3000"}})

# Load the trained model
MODEL_PATH = "wine_quality_model.pkl"
model = joblib.load(MODEL_PATH)

# Define the feature names (columns) expected by the model
FEATURES = [
    "fixed acidity", "volatile acidity", "citric acid", "residual sugar",
    "chlorides", "free sulfur dioxide", "total sulfur dioxide", "density",
    "pH", "sulphates", "alcohol"
]

@app.route("/predict", methods=["POST"])
def predict():
    """
    Endpoint to predict wine quality.
    Expects JSON input with feature values.
    Returns predicted quality as JSON.
    """
    try:
        # Parse JSON data from the request
        data = request.json
        print(data)
        # Validate input: Ensure all features are provided
        if not all(feature in data for feature in FEATURES):
            return jsonify({"error": "Missing one or more required features"}), 400

        # Create a DataFrame from the input data
        input_data = pd.DataFrame([data])
        input_data = input_data.astype(float)

        # Ensure the columns are in the correct order
        input_data = input_data[FEATURES]

        # Make predictions using the loaded model
        predictions = model.predict(input_data)

        predicted_quality = round(float(predictions[0]))  # Round to nearest integer
        predicted_quality = float(f"{predicted_quality}.0")
        print(predicted_quality)
        # Return the prediction as JSON
        return jsonify({"predicted_quality": f"{predicted_quality:.1f}"})

    except Exception as e:
        # Handle unexpected errors
        return jsonify({"error": str(e)}), 500


@app.route("/", methods=["GET"])
def home():
    """
    Home endpoint to check if the server is running.
    """
    return "Wine Quality Prediction API is running!"


if __name__ == "__main__":
    # Run the Flask app
    app.run(debug=True, host="0.0.0.0", port=5000)