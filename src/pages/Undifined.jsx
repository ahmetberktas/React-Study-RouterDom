import React from 'react'
import { useLocation } from 'react-router-dom'

const Undifined = () => {
    const { state } = useLocation();
  return (
    <div>{state} Sayfa Bulunamadı</div>
  )
}

export default Undifined