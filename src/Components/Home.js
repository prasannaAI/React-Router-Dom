import React from 'react';
import { useNavigate} from 'react-router-dom';

function Home() {

  const navigate = useNavigate()
  return (
    <div>
      <div>Home Page</div>
      <button onClick={() => navigate('/Order')}> Place the order </button>
    </div>
    
  )
}

export default Home