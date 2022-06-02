import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    //   <h1>RoboFriends</h1>
    <div className="tc bg-light-green hover-bg-washed-green dib br4 pa1 ma2 grow shadow-5">
      <img alt="robots" src={`https://robohash.org/set_set5/${id}?50x50`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

// import React, { Component } from 'react';

// class Card extends Component {
//   render() {
//     return (
//       //   <h1>RoboFriends</h1>
//       <div className="tc bg-light-green dib br4 pa1 ma2 grow shadow-5">
//         <img
//           alt="robots"
//           src={`https://robohash.org/set_set5/${this.props.id}?50x50`}
//         />
//         <div>
//           <h2>{this.props.name}</h2>
//           <p>{this.props.username}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;
