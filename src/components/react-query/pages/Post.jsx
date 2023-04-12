import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost } from './api/posts'

export default function Post() {
  const navigate = useNavigate()
  const { id } = useParams()
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['post', id], queryFn: () => fetchPost(id) })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <button type="button" onClick={() => navigate('/post')}>
        Back
      </button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
