import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import AddPost from './components/AddPost'
import { deletePost, fetchPosts } from './api/posts'

export default function PostLists() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
      <AddPost />
      {posts.map((post) => (
        <div key={post.id}>
          <h4
            role="presentation"
            onKeyDown={(e) => navigate(`/post/${post.id}`)}
            onClick={(e) => navigate(`/post/${post.id}`)}
          >
            {post.title}
          </h4>
          <button
            type="button"
            onKeyDown={(e) => navigate(`/post/${post.id}/edit`)}
            onClick={(e) => navigate(`/post/${post.id}/edit`)}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(post.id)} type="button">
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
