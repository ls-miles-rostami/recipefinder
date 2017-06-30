import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RecipeItem from './RecipeItem';


class RecipeList extends Component{
  render(){
    console.log('this.props', this.props)
    return (
      <div>
        {/* Here we are saying only display the favorite link if the user has at least 1 recipe favorited */}
        {
          this.props.favoriteRecipes.length > 0 ?
          <h4 className="link"><Link to='/favorites'> Favorites </Link></h4>
          :
          <div></div>
        }
        {
          this.props.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <RecipeItem
                  recipe={recipe}
                  favoriteButton={true}
                  />
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, null)(RecipeList);
