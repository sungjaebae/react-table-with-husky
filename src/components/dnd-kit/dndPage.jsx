import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import SortableItem from './SortableItem'

export default function DndPage() {
  const [languages, setLanguages] = useState(['javascript', 'python', 'typescript'])

  const handleDragEnd = (e) => {
    console.log('drag end calleds')
    const { active, over } = e
    console.log(e)
    console.log('ACTIVE: ', active)
    console.log('OVER: ', over)

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id)
        const overIndex = items.indexOf(over.id)
        return arrayMove(items, activeIndex, overIndex)
      })
    }
  }
  const handleDragStart = (e) => {
    console.log('drag start calleds')
  }
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div>
        <h3>best programming languages</h3>
        <SortableContext items={languages} strategy={verticalListSortingStrategy}>
          {languages.map((language) => (
            <SortableItem key={language} id={language} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  )
}
