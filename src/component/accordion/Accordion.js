import { Button } from '../button/Button';

import './accordion.scss';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  changeState = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div className={this.state.active ? 'wrap_accordion' : ''}>

        <Button
          title={this.state.active ? 'Hide' : 'Show'}
          onClick={this.changeState}
        />

        {this.state.active &&
          <div className="accordion_content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dignissimos magni quaerat reiciendis
            voluptate.
            Corporis cupiditate, dicta doloremque eligendi expedita itaque maxime nam necessitatibus neque nesciunt
            non nulla, officiis, provident?
          </div>
        }

      </div>
    );
  }
}
