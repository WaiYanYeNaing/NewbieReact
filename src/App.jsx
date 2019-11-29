import React from 'react'
import Container from './components/Container'
import './App.css'
import Row from './components/Row'
// arrow function component
// const App = () => (
//   <div style={{ width: '80%', margin: 'auto' }}>
//     <div style={{ display: 'flex' }}>
//       <div style={{ marginLeft: 'auto' }}>
//         <h1>Kwee Saw</h1>
//       </div>
//     </div>
//   </div>
// )

// {} interpolation
// style must write with object

// yo yo function component
function App() {
  return (
    <Container>
      <Row>
        <div className="justify-end">
          <h1 className="red-text teal-bg">HOLA</h1>
        </div>
      </Row>
      <Row>
        <div className="teal-bg">
          <h1>Hola</h1>
        </div>
      </Row>
    </Container>
  )
}

export default App
