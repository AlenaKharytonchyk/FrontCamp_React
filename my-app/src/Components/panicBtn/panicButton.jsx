import React from 'react';
import './panicButton.scss';

export default class PanicButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      throw new Error('PANIC!');
    }

    return (
      <input type="button" className="panic" value="Click to panic!" onClick={this.onButtonClick} />
    );
  }
}
