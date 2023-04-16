import { useQuery } from '@tanstack/react-query'
import { getUsers } from './api/usersApi'
import queryKeys from './factory/queryKeyFactory'

const Nav = ({ currentUserId, setCurrentUserId }) => {
  const {
    isLoading,
    error,
    data: employees,
  } = useQuery({
    queryKey: queryKeys.users(),
    queryFn: getUsers,
    suspense: true,
    useErrorBoundary: true,
    retry: false,
  })

  let options
  if (isLoading) {
    options = <option>Loading...</option>
  } else if (!error) {
    options = employees.map((user) => (
      <option key={`opt${user.id}`} value={user.id}>
        {user.name}
      </option>
    ))
    const titleValue = (
      <option key="opt0" value="0">
        Employees
      </option>
    )
    options.push(titleValue)
  }

  const onChangeUser = (e) => setCurrentUserId(e.target.value)

  let content
  if (error) {
    content = <p>{error.message}</p>
  } else {
    content = (
      <select
        name="selectMenu"
        id="selectMenu"
        className="selectMenu"
        value={currentUserId}
        aria-label="Employee Name"
        onChange={onChangeUser}
      >
        {options}
      </select>
    )
  }

  return content
}
export default Nav
