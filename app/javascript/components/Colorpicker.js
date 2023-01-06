import React from 'react'
import { SketchPicker } from 'react-color'
import PropTypes from "prop-types"

class Colorpicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selector: props.selector };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (color) => {
        document.body.style.background = color.hex;
        // console.log(color.hex);
        let elem = document.querySelector('#'+this.state.selector);

        elem.value = color.hex;
    };

    render() {
        return (
            <React.Fragment>
                <SketchPicker   color = {this.props.color}
                                onChange={this.handleChange} />
            </React.Fragment>
        );
    }
}

Colorpicker.propTypes = {};

export default Colorpicker
