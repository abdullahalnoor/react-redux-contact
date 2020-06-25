import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


import { singleAction} from '../../actions/contactAction'



class Contact extends Component {
  state = {
    showContactInfo: false,
   

  };
  


  onDeleteClick = id => {
    //// DELETE CONTACT ////
    
   const payload = {id:id,type:"deleteContact"}
    this.props.singleAction(payload)
  };
  editContact = id => {
    const payload = {id:id,type:"setContact"}
    this.props.singleAction(payload)
    // let route 
    // this.props.history.push('/');
    // let history = useHistory();
    this.props.history.push(`/contact/edit/${id}`);

  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          {/* <Link to={`contact/edit/${id}`}> */}
            <i
              className="fas fa-pencil-alt"
              onClick={this.editContact.bind(this,id)}
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          {/* </Link> */}
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};


export default connect(null,{singleAction})(Contact);
