import React, { Component } from 'react';

const withSecretToLife = (WrappedComponent) => {
  class SecretWrapper extends Component {
      render() {
          return <WrappedComponent
              {...this.props}
              secretToLife={'wrapped secret'}
          />
      }
  }

  return SecretWrapper;
};
export default withSecretToLife;