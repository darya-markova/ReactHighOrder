import React from 'react';
import withSecretToLife from './../wrappers/withSecretToLife';

const DisplayTheSecretComponent = props => {
  return (
      <div>The secret to life is <b>{props.secretToLife}</b>.</div>
  );
};
export default withSecretToLife(DisplayTheSecretComponent);