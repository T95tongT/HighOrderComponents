import React, { Component } from "react";
class H extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div style={{width:30, border:'1px solid red', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                11111
            </div>
        );
    }
}

export default H;
