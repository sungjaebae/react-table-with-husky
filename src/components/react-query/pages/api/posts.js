import axios from 'axios'

export async function fetchPosts() {
  const response = await axios('http://localhost:3000/posts')
  return response.data
}

export async function fetchPost(id) {
  const response = await axios(`http://localhost:3000/posts/${id}`)
  return response.data
}

export async function createPost(newPost) {
  const response = await axios.post(`http://localhost:3000/posts`, newPost)
  return response.data
}

export async function updatePost(updatedPost) {
  const response = await axios.put(`http://localhost:3000/posts/${updatedPost.id}`, updatedPost)
  return response.data
}

export async function deletePost(id) {
  const response = await axios.delete(`http://localhost:3000/posts/${id}`)
  return response.data
}

// export async function fetchPosts() {
//   const response = await fetch('http://localhost:3000/posts')
//   return response.json()
// }

// export async function fetchPost(id) {
//   const response = await fetch(`http://localhost:3000/posts/${id}`)
//   return response.json()
// }

// export async function createPost(newPost) {
//   const response = await fetch(`http://localhost:3000/posts`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   })
//   return response.json()
// }

// export async function updatePost(updatedPost) {
//   const response = await fetch(`http://localhost:3000/posts/${updatedPost.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedPost),
//   })
//   return response.json()
// }

// export async function deletePost(id) {
//   const response = await fetch(`http://localhost:3000/posts/${id}`, {
//     method: 'DELETE',
//   })
//   return response.json()
// }
