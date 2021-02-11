import React from 'react';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0, name: "Linus"}
    }

    click = () => {
        this.setState({clicks: this.state.clicks + 1})
        this.props.addClick()
    }

    render() {
        return (<div><p>{this.state.clicks}</p> <button onClick={this.click}>Ändra</button></div>)
    }
}

export default TestComponent;