import React from 'react'
import './About.css'
import play_icon from '../../assets/play-icon.png'
import about_img from '../../assets/about.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit, architecto tempora nobis modi amet qui accusamus a necessitatibus iste numquam quae, dolores, omnis ad sunt delectus sit ab consequuntur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit, architecto tempora nobis modi amet qui accusamus a necessitatibus iste numquam quae, dolores, omnis ad sunt delectus sit ab consequuntur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit, architecto tempora nobis modi amet qui accusamus a necessitatibus iste numquam quae, dolores, omnis ad sunt delectus sit ab consequuntur.</p>
      </div>
    </div>
  )
}

export default About