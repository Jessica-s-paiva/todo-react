import React, {useState, useEffect} from 'react';
import Cards from '../../Components/Cards/Cards';
const Tasks = (nome) => {
  const [state, setState] = useState([]);

  useEffect(() => {
      handleRequisition();
  }, [])

  async function handleRequisition() {
      const url = `https://jsonplaceholder.typicode.com/todos`;
      const requisition = await fetch(url);
      const json = await requisition.json();
      setState(json);
      console.log(json[0]);
  }

  return (
    <>
      <section>
        <h1>oi</h1>
      </section>
      <section>
      {
        !!state && state.map((user, index)=>{
            return (<Cards usuario={user} key={index}/>)
          })
        }
      </section>
    </>
  )
}

export default Tasks