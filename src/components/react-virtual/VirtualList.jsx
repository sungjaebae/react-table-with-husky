import { useVirtualizer } from '@tanstack/react-virtual'
import { faker } from '@faker-js/faker'
import { useRef } from 'react'

const randomNumber = (min, max) => faker.datatype.number({ min, max })
const sentences = new Array(1000).fill(true).map(() => faker.lorem.sentence(randomNumber(20, 70)))

export default function VirtualList() {
  const parentElement = useRef(null)
  const count = sentences.length
  const virtualizer = useVirtualizer({
    count /* 렌더링할 전체 아이템의 갯수 */,
    getScrollElement: () => parentElement.current /* 스크롤이 되는 부모 엘리먼트 */,
    estimateSize: () => 45 /* 아이템 하나의 높이(추정) */,
  })

  const items = virtualizer.getVirtualItems()
  return (
    <div ref={parentElement} style={{ height: 400, width: 400, overflowY: 'auto' }}>
      <div style={{ position: 'relative', height: virtualizer.getTotalSize(), width: '100%' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            transform: `translateY(${items[0].start}px)`,
          }}
        >
          {items.map((item) => (
            <div
              data-index={item.index}
              ref={virtualizer.measureElement}
              key={item.index}
              style={{ height: item.size, overflow: 'hidden' }}
            >
              {sentences[item.index]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
