import React from 'react';

import './button.scss';

// export const Button = (props) => {
//   const { active, onClick, title } = props;
//   const clName = active || '';
//   return (
//     <button
//       className={clName}
//       onClick={onClick}
//     >
//       {title}
//     </button>
//   );
// };

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };

  }

  // const { active, onClick, title } = props;
  // const clName = active || '';
  render() {
    const { title } = this.props;
    return (
      <button>
        {title}
      </button
      >
    );
  }
};
