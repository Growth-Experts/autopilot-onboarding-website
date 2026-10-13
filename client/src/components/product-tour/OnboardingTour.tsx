import { ProductTour } from "./ProductTour";
import { ONBOARDING_TOUR_ASPECT_RATIO, onboardingTourSteps } from "./onboarding-tour";

export default function OnboardingTour() {
  return (
    <ProductTour
      steps={onboardingTourSteps}
      aspectRatio={ONBOARDING_TOUR_ASPECT_RATIO}
      label="Start an employee onboarding request and route it to the right team"
    />
  );
}
