import Checkbox from './Checkbox'

export default function HeaderComponent({ getToggleAllRowsSelectedProps }) {
  return <Checkbox {...getToggleAllRowsSelectedProps()} />
}

// Header: ({ getToggleAllRowsSelectedProps }) => (
//   <Checkbox {...getToggleAllRowsSelectedProps()} />
// )
