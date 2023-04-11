function SomeComponent({ footer: Footer }) {
  return (
    <div>
      <Footer />
    </div>
  )
}

function Div() {
  return <div />
}

function Component() {
  return (
    <div>
      <SomeComponent footer={<Div />} />
      <div /> 자체가 최소한의 함수형 컴포넌트임 걍 <div />면 태그여서 되는데.
    </div>
  )
}
