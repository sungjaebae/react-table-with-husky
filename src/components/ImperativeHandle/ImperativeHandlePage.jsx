import { useRef } from 'react'
import CustomInput from './CustomInput'

export default function ImperativeHandlePage() {
  const inputRef = useRef()
  const handleChange = () => {
    inputRef.current.hi()
  }
  return (
    <div>
      <h1>ImperativeHandlePage</h1>
      <CustomInput onChange={handleChange} ref={inputRef} />
    </div>
  )
}
