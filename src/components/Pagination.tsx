import React from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'

interface IProps {
  currentPage: number
  numPages: number
  path: string
}

const Pagination = ({ currentPage, numPages, path }: IProps) => {
  console.log(numPages)
  console.log(currentPage)
  return (
    <div className="pagination">
      <Link
        to={`/${path}/${currentPage <= 2 ? '' : currentPage - 1}`}
        className={`btn btn--${currentPage === 1 ? 'active' : 'primary'}`}
      >
        Prev
      </Link>

      {Array.from({ length: numPages }, (_, i) => {
        return (
          <Link
            key={i}
            to={`/${path}/${i === 0 ? '' : i + 1}`}
            className={`btn btn--${
              currentPage === i + 1 ? 'active' : 'primary'
            }`}
          >
            {i + 1}
          </Link>
        )
      })}

      <Link
        to={`/${path}/${
          currentPage === numPages ? currentPage : currentPage + 1
        }`}
        className={`btn btn--${
          currentPage === numPages ? 'active' : 'primary'
        }`}
      >
        Next
      </Link>
    </div>
  )
}

export default Pagination
