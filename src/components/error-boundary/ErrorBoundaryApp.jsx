import { useState, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Header from './Header'
import PostsList from './PostsList'

import SkeletonPost from './skeletons/SkeletonPost'
import ErrorFallback from './ErrorFallback'

const queryClient = new QueryClient()

function App() {
  const [currentUserId, setCurrentUserId] = useState(0)

  const content =
    currentUserId === 0 ? (
      <h2 className="message">Select an Employee to view posts</h2>
    ) : (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCurrentUserId(0)}
        resetKeys={[currentUserId]}
      >
        <Suspense
          fallback={[...Array(10).keys()].map((i) => (
            <SkeletonPost key={i} />
          ))}
        >
          <PostsList currentUserId={currentUserId} />
        </Suspense>
      </ErrorBoundary>
    )

  return (
    <QueryClientProvider client={queryClient}>
      <Header currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} />
      {content}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App