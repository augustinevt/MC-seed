import React from 'react';

class ControlDefault extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello, Im the ControlDefault
        <input placeholder="I am a control thing" />
        <button> Im a cool button </button>
        <select>
          <option> foo </option>
        </select>

      </div>
    );
  }
}

export default ControlDefault;
