import React, { Component } from 'react';
import Friend from "./Friend";
import soccerArray from "../soccerArray.json";
import "../styles/Main.css";


export default class Main extends Component {

  mixFriends = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  handleClick = (id) => {
    this.props.itScored(id);
    this.mixFriends(soccerArray)
  }
  render() {
    return (
      <div className="main">
        <div className="container-fluid">
          <div className="jumbotron navbar-brand ">Soccer Memory Game</div>
          <div className="container-fluid friend-box">
            {soccerArray.map(image =>
              <Friend
                src={image.src}
                alt={image.name}
                id={image.id}
                key={image.id}
                handleClick={this.handleClick}
              />)}
          </div>
        </div>
      </div>
    )
  }

}