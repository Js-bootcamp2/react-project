import React from 'react';
import Button from '../../components/Button/button';

export default class About extends React.Component {
  constructor() {
    super();
    console.log('constructor')

    this.state = {render: false};
  }

  componentDidMount() {
    console.log('did mount')
    //fetch
  }

  componentDidUpdate() {
    console.log('did update')
  }

  componentWillUnmount() {
    console.log('unmount')
  }

  // shouldComponentUpdate() {
  //   console.log('this.state.render', this.state.render)
  //   if (this.state.render === true ) {
  //     return false;
  //   }
  //   return true;
  // }

  reRender() {
    this.setState({render: !this.state.render})
  }

  render() {
    console.log('render')
    return (
      <div>
        this is About page !!!
        <hr/>
        <div>
          <Button onClick={() => this.reRender()} >{this.state.render ? 'true' : 'false'}</Button>
        </div>
      </div>
    
    )
  }
}