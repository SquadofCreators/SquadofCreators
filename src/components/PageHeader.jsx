import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader({ title, description, breadcrumbs }) {
  return (
    <header className="bg-indigo-100 py-8 px-6 md:px-16">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-600 mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-600">{description}</p>
      </div>

      <div className="w-full flex items-center justify-center">
        {/* Breadcrumbs */}
        <nav className="text-sm text-indigo-600">
          <ol className="flex items-center space-x-2">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {breadcrumb.link ? (
                  <Link
                    to={breadcrumb.link}
                    className="hover:text-indigo-800 transition duration-200"
                  >
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-500">{breadcrumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  )
}

export default PageHeader