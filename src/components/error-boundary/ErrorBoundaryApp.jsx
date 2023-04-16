import { useState, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryClient } from '@tanstack/react-query'

import Header from './Header'
import PostsList from './PostsList'

import SkeletonPost from './skeletons/SkeletonPost'
import ErrorFallback from './ErrorFallback'

function ErrorBoundaryApp() {
  const queryClient = useQueryClient()
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
    <>
      {/* 에러 바운더리에 Header은 들어가지 않는데, 이 녀석도 api 통신을 통해 예외를 발생시키므로 json-server 실행해야 함 */}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          queryClient.refetchQueries(['/users'])
        }}
        resetKeys={['/users']}
      >
        <Suspense
          fallback={[...Array(1).keys()].map((i) => (
            <SkeletonPost key={i} />
          ))}
        >
          <Header currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} />
        </Suspense>
      </ErrorBoundary>
      {content}
    </>
  )
}

export default ErrorBoundaryApp
