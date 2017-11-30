import { Button } from '../button/Button';

export class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLocation = () => {
    // return navigator.geolocation.getCurrentPosition(console.log);
  };

  showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    return { latitude, longitude };
  };

  render() {
    return (
      <div>
        <Button
          title="Get your coordinates"
          onClick={this.getLocation}
        />
        {/* <div className="location"></div> */}
        {/* <div className="contentLocation"></div> */}
      </div>
    );
  }
}
