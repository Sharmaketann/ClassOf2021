import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  let params = useParams()

  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const data = await fetch(
      `https://my-amigos-api.herokuapp.com/students/${params.name}`
    )

    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  })

  return (
    <div className='detail__wrapper'>
      <div>
        <h2 className='detail__name'>{details.name}</h2>
        <img className='detail__image' src={details.image} alt={details.name} />
      </div>
      <div className='detail__info'>
        <button className='detail__button'>Portfolio</button>
        <button className='detail__button'>Linkedin</button>

        <div>
          <h3>Description: {details.description}</h3>
          <h3>CurrentStatus: {details.currentstatus}</h3>
          <h3>Niche: {details.niche}</h3>
          <h3>Specialization: {details.specialization}</h3>
          <h3>Github: {details.github}</h3>
        </div>
      </div>
    </div>
  )
}

export default Details
