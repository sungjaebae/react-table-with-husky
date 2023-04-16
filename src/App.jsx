import { Route, Routes } from 'react-router-dom'
import PostLists from './components/react-query/pages/PostsLists'
import Post from './components/react-query/pages/Post'
import EditPost from './components/react-query/pages/EditPost'
import SignUpPage from './components/react-hook-form/SignUpPage'
import ImperativeHandlePage from './components/ImperativeHandle/ImperativeHandlePage'
import ErrorBoundaryApp from './components/error-boundary/ErrorBoundaryApp'
import WhyDidYouRender from './components/why-did-you-render-hook/WhyDidYouRender'
import MaterialReactTableApp from './components/material-react-table/MaterialReactTable'

function App() {
  return (
    <div>
      <h1>여러 예제가 모여있음</h1>
      <Routes>
        <Route path="/post" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/imperative-handle" element={<ImperativeHandlePage />} />
        <Route path="/error-boundary" element={<ErrorBoundaryApp />} />
        <Route path="/why-did-you-render" element={<WhyDidYouRender />} />
        <Route path="/material-react-table" element={<MaterialReactTableApp />} />
      </Routes>
    </div>
  )
}
App.whyDidYouRender = true

export default App
