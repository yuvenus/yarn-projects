import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    state = {
        expanded: false,
        sort: false
    }

    changeExpanded = () => this.setState({expanded: !this.state.expanded});
    // changeSort = (type) =>  

    render() {
        return <div className={this.state.expanded ? 'header expanded' : 'header'}>
            <div className="buttons-ctnr">
                <span className="button info" onClick={this.changeExpanded}>
                    <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                </span>
                {/* <span className="button sort" onClick={this.changeExpanded}>
                    <FontAwesomeIcon className="icon" icon={faSort} />
                </span> */}
            </div>

            {this.state.expanded && 
                <p>This is my collection of stuffed animals I've crocheted/knitted (mostly the former) for friends 
                    and coworkers so that they would have a friend to help them through stressful times. 
                    The secondary goal was to shrink my yarn collection but I ended up buying more yarn instead!</p>
            }  
        </div>
    }
}

export default Header;