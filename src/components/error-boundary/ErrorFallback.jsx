import { useErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error }) {
  const { resetBoundary } = useErrorBoundary()
  return (
    <div className="error">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetBoundary}>
        Try again
      </button>
    </div>
  )
}
export default ErrorFallback
