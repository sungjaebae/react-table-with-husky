import { useQuery } from '@tanstack/react-query'

import getPostsByUserId from './api/postsApi'

import { getUserById, getUsers } from './api/usersApi'

import Post from './Post'
import queryKeys from './factory/queryKeyFactory'

function PostsList({ currentUserId }) {
  const { data: user } = useQuery({
    queryKey: queryKeys.user(currentUserId),
    queryFn: () => getUserById(currentUserId),
    suspense: true,
    useErrorBoundary: true,
  })

  const { data: posts } = useQuery({
    querykey: queryKeys.posts(currentUserId),
    queryFn: () => getPostsByUserId(currentUserId),
    suspense: true,
    useErrorBoundary: true,
  })

  const content = (
    <main>
      {posts.map((post) => (
        <Post key={post.id} post={post} user={user} />
      ))}
    </main>
  )

  return content
}
export default PostsList
