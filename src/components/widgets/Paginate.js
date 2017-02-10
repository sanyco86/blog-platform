import React, { Component } from 'react'

export default class Paginate extends Component {
  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li>
            <a href="#" ariaLabel="Previous">
              <span ariaHidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" ariaLabel="Next">
              <span ariaHidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
