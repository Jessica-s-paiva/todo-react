import React, {useState, useEffect} from 'react';
import S from './Home.module.css';
import Cards from '../../Components/Cards/Cards';

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
      <section className={S.sectionCards}>
        {
          !!state && state.map((user, index)=>{
            return (<Cards usuario={user} key={index}/>)
          })
        }
      </section>
    </div>
  )
}

export default Home