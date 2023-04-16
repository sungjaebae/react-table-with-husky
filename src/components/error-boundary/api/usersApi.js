import axios from 'axios'

const usersApi = axios.create({
  baseURL: 'http://localhost:3500',
})

export async function getUsers() {
  const response = await usersApi.get('/users')
  return response.data
}

export async function getUserById(userId) {
  //  const response = await usersApi.get(`/users/${userId}`)
  // 일부러 에러나게 바꿈
  const response = await usersApi.get(`/users/asdf${userId}`)
  return response.data
}
