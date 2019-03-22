import React from 'react';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <img  className="feed-img" src={this.props.morsal}/> 
      {/*giving a class name for the images, the this.props is for calling items from other components within instagram_clone and the this.props.morsal is calling the morsal variable from Feed/index.jsx*/}
      </div>
    )
  }
}
