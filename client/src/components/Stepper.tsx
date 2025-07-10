type StepperProps = {
  currentStep: number;
};

  const steps = [1, 2, 3,4];


const Stepper = ({ currentStep }: StepperProps) => {
  return (
    <div className="flex justify-center items-center gap-4 py-4">
      {steps.map((step, index) => {
        const isCompleted = step < currentStep;
        const isActive = step === currentStep;

        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold
                ${isCompleted ? 'bg-green-600' : isActive ? 'bg-green-800' : 'bg-gray-300'}
              `}
            >
              {isCompleted ? '✓' : step}
            </div>
            {index < steps.length - 1 && (
              <div className="w-8 h-1 bg-gray-300"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;