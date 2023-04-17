import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/posts'
export async function fetchPosts() {
  const response = await axios(`${baseUrl}`)
  return response.data
}

export async function fetchPost(id) {
  const response = await axios(`${baseUrl}/${id}`)
  return response.data
}

export async function createPost(newPost) {
  const response = await axios.post(`${baseUrl}`, newPost)
  return response.data
}

export async function updatePost(updatedPost) {
  const response = await axios.put(`${baseUrl}/${updatedPost.id}`, updatedPost)
  return response.data
}

export async function deletePost(id) {
  const response = await axios.delete(`${baseUrl}/${id}`)
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
