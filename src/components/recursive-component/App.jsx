import React from 'react'
import Tree from './Tree'

export default function RecursiveComponentApp() {
  const fileStructure = [
    {
      name: 'Folder 1',
      type: 'folder',
      children: [
        {
          name: 'File 1',
          type: 'file',
        },
        {
          name: 'Folder 1.1',
          type: 'folder',
          children: [
            {
              name: 'File 1.1',
              type: 'file',
            },
          ],
        },
      ],
    },
    {
      name: 'File 2',
      type: 'file',
    },
  ]

  return (
    <div>
      <Tree items={fileStructure} />
    </div>
  )
}
