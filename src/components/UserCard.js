import React from 'react';
import character from '../images/character.png';

const UserCard = (props) => {
  return(
    <div className="ui card" style={{width: 250}}>
      <div className="image">
        <img src={character} alt={props.name} />
      </div>
      <div className="content">
        <div className="header">
          {props.name}
        </div>
      </div>
    </div>
  )
}

export default UserCard;