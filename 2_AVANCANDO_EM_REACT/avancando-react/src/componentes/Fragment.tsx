import React from 'react'

const Fragment = ({ propFragment }) => {
  return (
    <div>
        <h2>Primeiro Título</h2>
        <h3>Segundo Título</h3>
        <h4 {...propFragment} ></h4>
    </div>
  )
}

export default Fragment