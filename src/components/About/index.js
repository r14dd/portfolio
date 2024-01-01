import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faJava,
    faPython,
    faDocker,
    faGithub,
    faHtml5, 
    faJsSquare,  
    } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
        clearTimeout(timeoutId)
        }
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["A","b","o","u","t"," ","m","e"]}
                            idx={15}
                    />
                </h1>
                <p>I come from Azerbaijan, the easternmost country in Europe, 
                    and relocated to the United States in 2021.
                    I specialize as a software engineer. 
                    My affection for technology spans its creation, 
                    utilization, and continual learning. 
                    While my linguistic abilities extend to being a polyglot, 
                    I also possess proficiency in programming languages 
                    such as Python, C, Scala, and Java.
                </p>

                <p> Irrespective of the artillery of programming languages 
                    and tools in my possession, as well as those available to others, 
                    I regard Computer Science as the strategic pathway to confront 
                    challenges that might arise within the sphere of human activity.
                </p>

                <p>I currently hold the position of Head Teaching Assistant for the 
                    Data Structures and Algorithms course (CSE250) at the University at Buffalo. 
                    Over the past two years, I've also served as a teaching assistant for 
                    courses including Computer Organization, Discrete Structures, and Intro to Computer Science. 

                    If you want to learn more about me, or take a look at my projects/experience, 
                    visit the "Catalog" and "Teaching" page linked in the sidebar. 
                    If you are willing to get in contact with me, you can visit the "Contact" page,
                    also located in the sidebar. 
                </p>
                <p>
                    Check out my resume, LinkedIn page and GitHub profile located in the bottom of the side bar.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faDocker} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#000000" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple" />
    </>)
}

export default About
