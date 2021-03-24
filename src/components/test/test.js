import React, { Component, Fragment } from 'react'
import './test.css'
import {Link, useRouteMatch, useParams} from 'react-router-dom'

class Test extends Component {

    render() {
        const id = this.props.match.params.id;
        return (
            <Fragment>
                <h2>Id from params: {id}</h2>
            </Fragment>
        )
    }
}

export default Test;