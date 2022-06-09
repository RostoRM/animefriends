import React from 'react';
import Card from './Card';

const CardList = ({ avatars }) => {
  return (
    <div>
      {avatars.map((user, i) => {
        return (
          <Card
            key={i}
            id={avatars[i].id}
            name={avatars[i].name}
            email={avatars[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;

// import React, { Component } from 'react';
// import Card from './Card';

// class CardList extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.robots.map((user, i) => {
//           return (
//             <Card
//               key={i}
//               id={this.props.robots[i].id}
//               name={this.props.robots[i].name}
//               username={this.props.robots[i].username}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
