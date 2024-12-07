import { useNavigate, useParams } from 'react-router'

const useOnboarding = () => {
  const navigate = useNavigate()
  const params = useParams();
  const { onboardingId: presetOnboardingId = '0' } = params;
  const onboardingId = Number.parseInt(presetOnboardingId, 10);

  const clickNext = (url: string = '') => {
    navigate(url)
  }

  const clickSkip = () => {
      navigate('/survey')
  }

  return { onboardingId, clickNext, clickSkip };
}

export default useOnboarding;
