import { useRef } from 'react'
import SignUpForm from './SignUpForm'

export default function SignUpPage() {
  const signupFormRef = useRef(null)
  const handleSubmit = async (data) => {
    const response = await fetch(`http://localhost:3000/postsasdf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const jsonResponse = await response.json()
    if (!jsonResponse.success) {
      signupFormRef.current.setErrors(jsonResponse.errors)
    }
  }

  return <SignUpForm ref={signupFormRef} onSubmit={handleSubmit} />
}
