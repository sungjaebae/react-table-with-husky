import axios from 'axios'

const postsApi = axios.create({
  baseURL: 'http://localhost:3500',
})

export default async function getPostsByUserId(userId) {
  const response = await postsApi.get(`/posts?userId=${userId}`)
  return response.data
}
