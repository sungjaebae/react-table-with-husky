import { useQuery } from '@tanstack/react-query'

import { getPostsByUserId, postsUrlEndpoint as postsCacheKey } from '../../api/postsApi'

import { getUserById, usersUrlEndpoint as usersCacheKey } from '../../api/usersApi'

import Post from './Post'

function PostsList({ currentUserId }) {
  const { data: posts } = useQuery(
    [postsCacheKey, currentUserId],
    getPostsByUserId(postsCacheKey, currentUserId),
    { suspense: true },
  )

  const { data: user } = useQuery(
    posts?.length ? [usersCacheKey, currentUserId] : null,
    getUserById(usersCacheKey, currentUserId),
    { suspense: true },
  )

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
