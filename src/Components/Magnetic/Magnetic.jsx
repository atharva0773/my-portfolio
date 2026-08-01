import { useMagnetic } from '../../hooks/useMagnetic'

function Magnetic({
  as: Tag = 'button',
  children,
  className = '',
  strength = 0.32,
  ...props
}) {
  const { ref, onMove, onLeave } = useMagnetic(strength)

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Magnetic
