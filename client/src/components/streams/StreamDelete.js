import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </div>
  )
  return (
    <div>
      Stream Delete
      <Modal title='Delete Stream' content="Are You Sure?" actions={actions}/>
    </div>
  );
}

export default StreamDelete;
