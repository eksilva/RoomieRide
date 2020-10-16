import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const Index = () => {
  
  return (
    <App />
  )
  
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));