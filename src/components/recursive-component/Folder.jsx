/* eslint-disable import/no-cycle */
// Folder.js
import Tree from './Tree'

export default function Folder({ name, children }) {
  return (
    <li>
      {name}
      <ul>
        <Tree items={children} />
      </ul>
    </li>
  )
}
