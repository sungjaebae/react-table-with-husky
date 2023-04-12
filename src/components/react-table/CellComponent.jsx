import Checkbox from './Checkbox'

export default function CellComponent({ row }) {
  return <Checkbox {...row.getToggleRowSelectedProps()} />
}
