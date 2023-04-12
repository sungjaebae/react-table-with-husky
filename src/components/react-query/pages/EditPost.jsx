import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import PostForm from './components/PostForm'
import { fetchPost, updatePost } from './api/posts'

export default function EditPost() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { id } = useParams()
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['post', id], queryFn: () => fetchPost(id) })
  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      navigate('/post')
    },
  })

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({ id, ...updatedPost })
  }
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <PostForm initialValue={post} onSubmit={handleSubmit} />
    </div>
  )
}
