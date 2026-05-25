import React from 'react'
import {nodeItems} from './Javascript.js'
import SkillCarousel from './SkillCarousel.jsx'
const Skill_node = () => {
  return (
    <div>
       <SkillCarousel
      data={nodeItems}
    />
    </div>
  )
}

export default Skill_node