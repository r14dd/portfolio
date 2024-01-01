import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const portfolio = (portfolioData && portfolioData.portfolio) || [];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = (projects) => {
        const projectsChunks = [];
        for (let i = 0; i < projects.length; i += 1) {
            projectsChunks.push(projects.slice(i, i + 1));
        }

        return (
            <div className="projects-container">
                {projectsChunks.map((chunk, idx) => (
                    <div className="projects-row" key={idx}>
                        {chunk.map((project, index) => (
                            <div className="project" key={index}>
                                <div className="content">
                                    <p className="title">{project.name}</p>
                                    <h4 className="description">{project.description}</h4>
                                    <h4 className="tools">{project.tools}</h4>
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
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {renderPortfolio(portfolio)}
            </div>
            <Loader type="ball-scale-ripple" />
        </>
    );
}

export default Portfolio;
