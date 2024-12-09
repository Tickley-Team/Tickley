import { Typography } from '@mui/material'
import onboarding0 from '../assets/onboarding/onboarding0.svg'
import onboarding1 from '../assets/onboarding/onboarding1.svg'
import onboarding2 from '../assets/onboarding/onboarding2.svg'
import onboarding3 from '../assets/onboarding/onboarding3.svg'
import { CTAButton } from '../components/Button'
import useOnboarding from '../hooks/useOnboarding'
import { MobileLayout } from '../layout/MobileLayout'

const OnboardingPage = () => {
  const { onboardingId, clickNext, clickSkip } = useOnboarding()

  const messages = {
    message: [
      '<p>자투리 시간,</p><p>무의미하게 흘려보내고 있지만</p><p>의미있게 활용하고 싶다고</p><p>생각하신 적 있으신가요?</p>',
      '<p>오늘 틈틈히</p><p>뭘 많이 하긴 했었는데...</p><p>내가 뭘했더라?</p><p>싶으신 적 있으신가요?</p>',
      '<p>바쁜 일상 속</p><p>흘려보내기 쉬운</p><p>자투리 시간까지 이제</p><p>놓치지 않게 도와드릴게요!</p>',
      '<p>티끌 같은 시간을 쌓아</p><p>태산 같은 변화를</p><p>함께 만들어 봐요!</p>',
    ],
    imgSrc: [onboarding0, onboarding1, onboarding2, onboarding3],
    nextUrl: ['/onboarding/1', '/onboarding/2', '/onboarding/3', '/survey'],
  }
  return (
    <MobileLayout>
      {onboardingId !== 4 && (
        <div
          style={{
            width: '72px',
            height: '48px',
            marginTop: '44px',
            marginBottom: '157px',
            marginLeft: '295px',
          }}
        >
          <a
            href="#"
            onClick={clickSkip}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            건너뛰기
          </a>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '175px',
        }}
      >
        <img src={messages.imgSrc[onboardingId]} alt="onboardingImg" />
        <Typography variant="title-5-medium-18" style={{ textAlign: 'center' }}>
          <div
            dangerouslySetInnerHTML={{
              __html: messages.message[onboardingId],
            }}
          />
        </Typography>
      </div>
      <CTAButton
        onClick={() => clickNext(messages.nextUrl[onboardingId])}
        style={{ width: '343px' }}
      >
        다음
      </CTAButton>
    </MobileLayout>
  )
}

export default OnboardingPage
