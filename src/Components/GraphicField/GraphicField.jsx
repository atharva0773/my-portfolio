function GraphicField() {
  return (
    <div className="graphic-field" aria-hidden="true">
      <div className="graphic-grid" />
      <div className="geo geo-ring geo-a" />
      <div className="geo geo-ring geo-b" />
      <div className="geo geo-square geo-c" />
      <div className="geo geo-cross geo-d">
        <span />
        <span />
      </div>
      <div className="geo geo-line geo-e" />
      <div className="geo geo-line geo-f" />
      <svg className="geo-dash" viewBox="0 0 200 200" fill="none">
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
      </svg>
    </div>
  )
}

export default GraphicField
