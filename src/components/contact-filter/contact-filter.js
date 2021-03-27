import React, { Component, Fragment } from 'react'
import './contact-filter.css'

class ContactFilterItem extends Component {

    handlerChangeInput = (e) => {
        var target = e.target;
        console.log(target.checked)
        if(target.checked){
            this.props.addFilter(target.value)
        }
        else{
            this.props.removeFilter(target.value)
        }
      }

    render() {
        return (
            <Fragment>
                <div className="filter-cont">
                    <div className="filter-block">
                    <h4>Groups : </h4>
                        {this.props.groups.map((group) =>
                            <div key={group.id}  className="form-check">
                                <input onChange={this.handlerChangeInput} className="form-check-input" type="checkbox" name={group.id} value={group.id} id={group.id}/>
                                    <label className="form-check-label" for={group.id}>
                                        {group.name}
                                    </label>
                            </div>)}
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default ContactFilterItem;