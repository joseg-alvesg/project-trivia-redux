import React from 'react';
import Header from '../components/Header';

class Settings extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="settings-title">Configurações</h1>
      </div>
    );
  }
}

export default Settings;
