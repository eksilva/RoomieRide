import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


import App from './components/App.jsx';

const Index = () => {
  
  return (
    <Content>
      <App />
    </Content>
  )
  
}

const Content = styled.div`

`;

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));