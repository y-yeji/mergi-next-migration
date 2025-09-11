interface OnboardingStepperProps {
  currentStep: number;
  totalSteps: number;
}

const OnboardingStepper = ({
  currentStep,
  totalSteps,
}: OnboardingStepperProps) => {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col items-center mb-7">
      <span className="h4-b text-primary-3">
        {currentStep}/{totalSteps}
      </span>
      <div className="w-[534px] h-4 bg-gray-10 rounded-full">
        <div
          className="h-4 bg-primary-3 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};

export default OnboardingStepper;
