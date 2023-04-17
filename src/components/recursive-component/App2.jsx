/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useState } from 'react'
import { data } from './data'

const root = {
  id: 'C',
  children: [
    {
      id: 'Program Files',
      children: [
        {
          id: 'Adobe',
          children: [
            {
              id: 'Adobe Creative Cloud',
            },
            {
              id: 'Adobe Illustrator CC',
            },
            {
              id: 'Adobe Premiere Pro CC',
            },
            {
              id: 'Common',
              children: [
                {
                  id: 'Plug-ins',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'Users',
      children: [
        {
          id: 'Richard',
        },
        {
          id: 'defaultuser0',
        },
      ],
    },
  ],
}

// 이 코드가 나은 점: 파일==디렉터리라서. 굳이 분리하지 않았음.
function RecursiveOption({ id, name, children_options }) {
  const [showChildren, setShowChildren] = useState(true)
  const handleClick = useCallback(() => {
    setShowChildren(!showChildren)
  }, [showChildren, setShowChildren])
  return (
    <div>
      <span onClick={handleClick}>
        <h4 style={{ fontWeight: showChildren ? 'bold' : 'normal' }}>
          {`id: ${id} name: ${name}`}
          <div>option의 자식 추가하기</div>
        </h4>
      </span>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          left: 25,
          borderLeft: '1px solid',
          paddingLeft: 15,
        }}
      >
        {showChildren &&
          (children_options ?? []).map((node) => <RecursiveOption key={node.id} {...node} />)}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ marginLeft: 15 }}>
      <div>product_id의 옵션 추가하기</div>
      {data.map((option) => {
        // console.log(option)

        return <RecursiveOption key={option.id} {...option} />
      })}
    </div>
  )
}
