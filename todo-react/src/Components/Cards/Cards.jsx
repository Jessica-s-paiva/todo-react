import React from 'react'
import Botao from '../Botao/Botao'
import Destaque from '../Destaque/Destaque'
import S from './Cards.module.css'
const Cards = ({produto}) => {
  return (
    <section className={S.container}>
        <picture className={S.contentFoto}>
            <img src={produto.image} className={S.foto} />
        </picture>
        <h4>{produto.name}</h4>
        <p>{produto.description}</p>
        <h4>De: {produto.oldPrice},00</h4> 
        <small>Por: {produto.price},00</small>
        <small>Ou: {produto.installments.count}x de {produto.installments.value}</small>
        <Botao  text='Comprar' />
    </section>
  )
}

export default Cards