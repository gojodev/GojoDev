import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer>
      <h3 className="generalText">
        &copy; GojoDev {new Date().getFullYear()}
      </h3>
    </footer>
  </div>
  )
}

export default Footer