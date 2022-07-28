import React from 'react'
import { Link } from 'react-router-dom'
import S from './Cards.module.css'
const Cards = ({usuario}) => {
  return (
    <section className={S.container}>
        <h4>{usuario.name}</h4>
        <p>{usuario.email}</p>
        <Link className={S.link} to='/tasks'><button>Ver tarefas</button></Link>
        
    </section>
  )
}

export default Cards