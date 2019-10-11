import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setAlertMsg} from './actions/action_alert-msg';

class Alerts extends Component {
    closeAlert = (e) => {
        this.props.setAlertMsg('');
    }

    render() {
        return (            
            <div className="alert alert-primary">
                {this.props.alertMsg}
                <span className="close" onClick={this.closeAlert}>X</span>
            </div>                    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alertMsg: state.alertMsg
    }
  }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setAlertMsg: setAlertMsg
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
  