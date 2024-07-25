import { SignUp } from '@clerk/nextjs'
import SignUpForm from '../sign-up'

const SignUpPage = () => {
  return (
    <main className="auth-page">
      {/* <SignUp /> */}
      <SignUpForm/>
    </main>
  )
}

export default SignUpPage