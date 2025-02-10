import React from 'react'
import Skills from './skills'
import './about.css'
import java from '../../assets/java.png';
import laravel from '../../assets/laravel.png';
import php from '../../assets/PHP.png';
import spring from '../../assets/spring.png';


const About = () => {
  return (
    <div className='about-container' id='about'>
        <div className="about-text">
            <p className="about-head">
What we do?
            </p>
            <p className='about-text'>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore adipisci facilis eos totam quae ea perferendis inventore commodi, voluptates repellendus autem obcaecati, dolor amet tenetur. Modi ducimus, qui sunt voluptas tempore maiores eveniet quae, iste asperiores odio dignissimos labore odit laborum magnam natus fuga provident nesciunt voluptate nulla unde!
            </p>

        </div>
        <div className="skills-continer">
            <Skills text='Java' logo={java}/>
            <Skills text='Spring Boot' logo={spring}/>
            <Skills text='Laravel' logo={laravel}/>
            <Skills text='PHP' logo={php}/>
            
        </div>
      
    </div>
  )
}

export default About
