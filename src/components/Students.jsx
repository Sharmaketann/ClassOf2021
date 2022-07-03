import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

function Students() {
  const [name, setName] = useState([])

  useEffect(() => {
    getStudents()
  }, [])

  const getStudents = async () => {
    const check = localStorage.getItem('name')
    if (check) {
      setName(JSON.parse(check))
    } else {
      const api = await fetch(`https://my-amigos-api.herokuapp.com/students`)
      const data = await api.json()
      localStorage.setItem('name', JSON.stringify(data))
      setName(data)
      console.log(data)
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Class of 2021</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem',
          }}
        >
          {name.map((data) => {
            return (
              <SplideSlide key={data.id}>
                <Card>
                  <Link to={'/student/' + data.id}>
                    <p>{data.name}</p>
                    <img src={data.image} alt={data.name} />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 2rem 0rem;
`

const Card = styled.div`
  min-height: 38rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    height: 100vh;

    object-fit: contain;
    position: absolute;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    font-weight: 600;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Students
