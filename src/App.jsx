import { Route, Routes } from 'react-router-dom'
import PostLists from './components/react-query/pages/PostsLists'
import Post from './components/react-query/pages/Post'
import EditPost from './components/react-query/pages/EditPost'

function App() {
  return (
    <div>
      <h1>여러 예제가 모여있음</h1>
      <Routes>
        <Route path="/post" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App
