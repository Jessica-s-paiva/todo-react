import React, {useState, useEffect} from 'react'
import Header from '../../Components/Header/Header';
import S from './Home.module.css'

const Home = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        handleRequisition();
    }, [])

    async function handleRequisition() {
        const url = `https://jsonplaceholder.typicode.com/users`;
        const requisition = await fetch(url);
        const json = await requisition.json();
        setState(json);
        console.log(json);
    }

  return (
    <div>
        <h3>oi</h3>
    </div>
  )
}

export default Home