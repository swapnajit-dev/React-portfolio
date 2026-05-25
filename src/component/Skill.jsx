import React from 'react'
import {htmlItems} from './Javascript.js'
import SkillCarousel from './SkillCarousel.jsx';

const Skill = () => {
  return (
    <div>
      <SkillCarousel data = {htmlItems}/>
    </div>
  )
}

export default Skill