import { TbApi, TbInfinity } from 'react-icons/tb'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className='list'>
      <NavLink to={'/student/api'}>
        <TbApi />
        <h4>API Access</h4>
      </NavLink>
      <NavLink to={'/student/1'}>
        <GiNoodles />
        <h4>2021</h4>
      </NavLink>
      <NavLink to={'/student/2'}>
        <GiChopsticks />
        <h4>CR</h4>
      </NavLink>
      <NavLink to={'/student/3'}>
        <TbInfinity />
        <h4>Infinity</h4>
      </NavLink>
    </div>
  )
}

export default Category
