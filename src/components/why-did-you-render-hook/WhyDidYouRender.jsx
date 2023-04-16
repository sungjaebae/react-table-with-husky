import React, { useState, useEffect, useRef } from 'react'

// 훅
function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef()
  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      // Use this object to keep track of changed props
      const changesObj = {}
      // Iterate through keys
      allKeys.forEach((key) => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          }
        }
      })
      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj)
      }
    }
    // Finally update previousProps with current props for next hook call
    previousProps.current = props
  })
}

const Counter = React.memo((props) => {
  useWhyDidYouUpdate('Counter', props)
  return <div style={props.style}>{props.count}</div>
})
export default function App() {
  const [count, setCount] = useState(0)
  const [userId, setUserId] = useState(0)
  // 콘솔에 찍히기를  CounterStyle 프롭이 매 렌더링마다 바뀌기 때문이라고 한다. 당연히 이 객체는 매 렌더링마다 새로 생성되니까. 이 객체를 컴포넌트 밖으로 빼든가, useMemo를 쓰든가 해야할듯
  const counterStyle = {
    fontSize: '3rem',
    color: 'red',
  }
  return (
    <div>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div className="user">
        <img alt="" src={`http://i.pravatar.cc/80?img=${userId}`} />
        <button type="button" onClick={() => setUserId(userId + 1)}>
          Switch User
        </button>
      </div>
    </div>
  )
}
