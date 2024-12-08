import useOnboarding from '../hooks/useOnboarding'
import { MobileLayout } from '../layout/MobileLayout'

const OnboardingPage = () => {
  const { onboardingId, clickNext, clickSkip } = useOnboarding()

  const messages = {
    message: [
      '<p>어느새 하루가 훌쩍지나갔는데</p><p>&apos;오늘 뭘 많이 하긴 했었는데... 내가 뭘 했더라?&apos; 싶은 적이 있나요?</p>',
      '<p>의미 없이 휴대폰만 스크롤하며</p><p>&apos;이 시간에 영어 단어 하나라도 외웠다면...&apos;</p><p>같은 생각을 해본 적이 있나요?</p>',
      '<p>바쁜 일상 속 플려보내기 쉬운 시간을</p><p>이제는 놓치지 않을 수 있도록 도와드릴게요!</p>',
      '<p>티끌 같은 시간을 쌓아 태산 같은 변화를</p><p>저희와 함께 만들어 봐요!</p>',
    ],
    nextUrl: ['/onboarding/1', '/onboarding/2', '/onboarding/3', '/survey'],
  }
  return (
    <MobileLayout>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: messages.message[onboardingId] }}
        />
        <button onClick={() => clickNext(messages.nextUrl[onboardingId])}>
          다음
        </button>
        {onboardingId !== 4 && <button onClick={clickSkip}>건너뛰기</button>}
      </div>
    </MobileLayout>
  )
}

export default OnboardingPage
