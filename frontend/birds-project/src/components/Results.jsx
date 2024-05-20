import React from "react";

const Results = ({ result, onPredictAgain }) => {
  const onSearchImages = (birdName) => {
    const query = encodeURIComponent(birdName);
    const url = `https://www.google.com/search?tbm=isch&q=${query}`;
    window.open(url, "_blank");
  };

  if (!result) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="text-lg font-semibold text-blue-500 bg-white p-4 rounded shadow-md">
          No predictions yet
        </div>
      </div>
    );
  }

  // Convert confidence to percentage and round to nearest integer
  const confidencePercentage = Math.round(result.confidence * 100);

  return (
    <div className="flex justify-center py-5">
      <div className="p-6 max-w-sm mx-auto bg-green-500 rounded-xl shadow-md flex items-center space-x-4">
        <div className="text-center">
          <div className="text-xl font-medium text-black">{result.class}</div>
          <p className="text-black">Confidence: {confidencePercentage}%</p>{" "}
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => onSearchImages(result.class)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Look for Images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
