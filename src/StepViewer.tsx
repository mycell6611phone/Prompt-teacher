import React from "react";

interface Props {
  steps: string[];
  currentStep: number;
  loading: boolean;
  nextStep: () => void;
}

const StepViewer: React.FC<Props> = ({
  steps,
  currentStep,
  loading,
  nextStep
}) => {
  if (steps.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded">
      <h3 className="font-semibold mb-2">
        Step {currentStep + 1} of {steps.length}
      </h3>
      <p>{steps[currentStep]}</p>

      {currentStep < steps.length - 1 && (
        <>
          <button
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
            onClick={nextStep}
          >
            Next Step
          </button>
        </>
      )}

      {loading && (
        <div className="text-center text-gray-600 font-medium mt-6">
          ⏳ Generating steps...
        </div>
      )}
    </div>
  );
};

export default StepViewer;
