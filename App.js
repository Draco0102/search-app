import logo from './logo.svg';
import './App.css';
import Main from './Main'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Main />
        </Row>
      </Container>
    </div>
  );
}

export default App;
