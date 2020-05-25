/*
 * @Author: your name
 * @Date: 2020-05-25 10:53:36
 * @LastEditTime: 2020-05-25 10:55:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\componments\ComponentSheng\test.js
 */ 
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Test extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div>1111111111</div>
        );
    }
}

Test.propTypes = {};

ReactDom.render(<Test /> , document.querySelector("#root"))
export default Test;