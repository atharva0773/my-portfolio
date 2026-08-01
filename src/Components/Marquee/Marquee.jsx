const items = [
  'React',
  'Node.js',
  'MongoDB',
  'JavaScript',
  'C++',
  'Java',
  'Express',
  'AWS',
  'Firebase',
  'JWT',
  'MySQL',
  'Accessibility',
]

function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
