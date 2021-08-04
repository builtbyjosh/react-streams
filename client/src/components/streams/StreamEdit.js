import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { Field, reduxForm } from "redux-form";

class StreamEdit extends Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    if (!this.props.stream){
      return <div>Loading....</div>
    }
    return (
      <div>Edit stream</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);
