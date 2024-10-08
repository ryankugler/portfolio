import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {

    return (
       
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="ml-5 mr-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
    )
}

export default Portfolio;