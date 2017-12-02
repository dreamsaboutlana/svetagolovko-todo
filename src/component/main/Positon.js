export class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getLocation = () => navigator.geolocation.getCurrentPosition(this.showPosition);

  showPosition = (position) => {
    if (position) {
      const { latitude, longitude } = position.coords;
      this.setState({
        position: true,
        latitude,
        longitude
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getLocation}>
          Get your coordinates
        </button>

        {this.state.position &&
        <div className="contentLocation">
          Latitude {this.state.latitude}, Longitude {this.state.longitude}
        </div>
        }
      </div>
    );
  }
}
