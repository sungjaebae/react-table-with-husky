import { forwardRef, useImperativeHandle } from 'react'

function CustomInput({ style, ...props }, ref) {
  useImperativeHandle(ref, () => ({
    hi() {
      console.log('Hi')
    },
  }))

  return (
    <input
      {...props}
      style={{
        border: 'none',
        backgroundColor: 'lightpink',
        padding: '.25em',
        boarderBottom: '2px solid black',
        ...style,
      }}
    />
  )
}

export default forwardRef(CustomInput)
