import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="d-flex justify-content-center align-items-center py-3 my-4 border-top"> {/* Removed col-md-4 class */}
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          </Link>

          <span className="mb-3 mb-md-0 text-muted">© {new Date().getFullYear()} UEM, Inc</span>
        </div>
      </footer>
    </div>
  )
}
