import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setRecipes } from '../actions';



class SearchRecipes extends Component{
  constructor(props){
    super(props)

    this.state ={
      ingredients: '',
      dish: ''
    }
  }
  search(){
    const {ingredients, dish} = this.state
    const URL = `http://www.recipepuppy.com/api/?${ingredients}&q=${dish}`
    fetch(URL, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        this.props.setRecipes(json.results)
      });
  }


  render(){

    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl
            type='text'
            placeholder='chicken or whatever'
            onChange={event => this.setState({ingredients: event.target.value})}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl
            type='text'
            placeholder='Dish or whatever'
            onChange={event => this.setState({dish: event.target.value})}
          />
        </FormGroup>
        {' '}
        <Button
          onClick={() => this.search()}
        >
        Submit
      </Button>
      </Form>
    )
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
