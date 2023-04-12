import { useMutation, useQueryClient } from '@tanstack/react-query'
import PostForm from './PostForm'
import { createPost } from '../api/posts'

export default function AddPost() {
  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: crypto.randomUUID(),
      ...post,
    })
  }

  return (
    <div>
      <h2>Add new post</h2>
      <PostForm onSubmit={handleAddPost} initialValue={{}} />
    </div>
  )
}
