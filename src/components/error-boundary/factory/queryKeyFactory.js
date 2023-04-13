const queryKeys = {
  all: ['todos'],
  users: () => {
    const arr = ['/users']
    console.log(arr)
    return arr
  },
  user: (currentUserId) => {
    const arr = ['/users', currentUserId]
    console.log(arr)
    return arr
  },
  posts: (currentUserId) => {
    const arr = ['/posts', currentUserId]
    console.log(arr)
    return arr
  },
}

export default queryKeys
