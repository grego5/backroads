import React from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'

interface IProps {
  currentPage: number
  numPages: number
}

const Pagination = ({ currentPage, numPages }: IProps) => {
  console.log(numPages)
  console.log(currentPage)
  return (
    <div className="pagination">
      <Link
        to={`/blogs/${
          currentPage === 1 || currentPage === 2 ? '' : currentPage - 1
        }`}
        className={`btn btn--${currentPage === 1 ? 'active' : 'primary'}`}
      >
        Prev
      </Link>

      {Array.from({ length: numPages }, (_, i) => {
        return (
          <Link
            key={i}
            to={`/blogs/${i === 0 ? '' : i + 1}`}
            className={`btn btn--${
              currentPage === i + 1 ? 'active' : 'primary'
            }`}
          >
            {i + 1}
          </Link>
        )
      })}

      <Link
        to={`/blogs/${
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
