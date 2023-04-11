function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}
export default ErrorFallback
