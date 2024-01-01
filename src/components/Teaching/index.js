import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import teachingData from '../../data/teaching.json';

const Teaching = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const teaching = (teachingData && teachingData.teaching) || [];

    

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderTeaching = (projects) => {
        const projectsChunks = [];
        for (let i = 0; i < projects.length; i += 1) {
            projectsChunks.push(projects.slice(i, i + 1));
        }

        return (
            <div className="teaching-container">
                {projectsChunks.map((chunk, idx) => (
                    <div className="teaching-row" key={idx}>
                        {chunk.map((teaching, index) => (
                            <div className="teaching" key={index}>
                                <div className="content">
                                    <p className="title">{teaching.name}</p>
                                    <h4 className="description">{teaching.description}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="container teaching-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Teaching".split("")}
                        idx={15}
                    />
                </h1>
                {renderTeaching(teaching)}
            </div>
            <Loader type="ball-scale-ripple" />
        </>
    );
}

export default Teaching;
