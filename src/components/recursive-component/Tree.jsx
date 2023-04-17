/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-cycle */
// Tree.js
import React from 'react'
import File from './File'
import Folder from './Folder'

function Tree({ items }) {
  return (
    <ul>
      {items.map((item, index) => {
        if (item.type === 'file') {
          return <File key={index} name={item.name} />
        }
        if (item.type === 'folder') {
          return (
            <Folder key={index} name={item.name}>
              {item.children}
            </Folder>
          )
        }
        return null
      })}
    </ul>
  )
}

export default Tree
