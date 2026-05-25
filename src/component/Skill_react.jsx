import React from 'react'
import SkillCarousel from './SkillCarousel';
import {reactItems} from './Javascript.js'
const Skill_react = () => {
  return (
    <div>
      <SkillCarousel data={reactItems}/>
    </div>
  )
}

export default Skill_react