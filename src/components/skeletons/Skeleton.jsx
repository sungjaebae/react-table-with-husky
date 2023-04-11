import './Skeleton.css'

function Skeleton({ classes }) {
  const classNames = `skeleton ${classes} animate-pulse`

  return <div className={classNames} />
}
export default Skeleton
