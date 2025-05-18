import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button';

import Input from './components/input';
import Modal from './components/modal'; 

function App() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = () => {
    if (!name.trim()) {
      setError('Name is required');
    } else {
      alert(`Hello, ${name}`);
      setError('');
    }
  };

  return (
    <>
    <div style={{ padding: '2rem' }}>
      <h1>Component Library</h1>
      <Button  onClick={() => alert('Primary clicked!')}>
       Primary Button</Button>
       <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
        Secondary Button
      </Button>
      <Button variant="danger" onClick={() => alert('Danger clicked!')}>
        Danger Button
      </Button>
      <Button disabled>Disabled Button</Button>
         </div>
       <div style={{ padding: '2rem' }}>
      <Input
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        error={error}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
    <div style={{ padding: '2rem' }}>
      <Input
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        error={error}
      />

      <Button onClick={handleSubmit}>Show Modal</Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Welcome!">
        <p>Hello, {name} </p>
      </Modal>
    </div>
    </>
  )
}

export default App;
