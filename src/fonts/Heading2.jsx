import React from 'react'

export default function Heading2({text}) {
  return (
    <div className='mb-4 font-bold' style={{ fontSize: '1.75rem', lineHeight: '2.125rem' }}>
      {text}
    </div>
  )
}

