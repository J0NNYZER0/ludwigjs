import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '../grid/Index'
import GridTop from '../grid/GridTop'
import GridBody from '../grid/GridBody'
import GridFooter from '../grid/GridFooter'
import LoadMore from '../LoadMore'
import Categories from '../lists/Categories'

class Grids extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const { items, actions } = this.props,
      { products } = actions

    if (items.length === 0) {

      products.get()

    }

  }

  render() {

    const { items } = this.props

    return (
      <div className="grids">
        {items.map(el => <Grid {...this.props} key={el.name}>
            <GridTop title={el.name}>
              {el.description}
            </GridTop>
            <GridBody>
              <LoadMore>
                {el.features.map((el,i) => <Categories key={i} item={el} />)}
              </LoadMore>
            </GridBody>
            <GridFooter>
              <NavLink className='link-button xl' to={`/plan/${el.id}`}>
                {`View ${el.name}`}
              </NavLink>
            </GridFooter>
          </Grid>
        )}
      </div>
    )

  }
}

export default Grids
