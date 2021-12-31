import React, { Component } from "react";
import codingImage from "../images/coding.jpg"
import "./about.css"

export default class About extends Component {
    render(){
        return(
            <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Ritik Mehta.
                    <br className="hidden lg:inline-block" />I love to learn new technologies
                    
                </h1>
                <p className="mb-8 leading-relaxed text-gray-300">
                    I am currently a final year undergraduate student at Delhi Technological University. My areas of expertise include
                    Web Development, Machine Learning, Deep Learning, Computer Graphics and Virtual Reality.
                </p>
                <div className="flex justify-center">
                    <a
                    href="#"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Work With Me
                    </a>
                    <a
                    href="#"
                    className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    See My Past Work
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="codingImage"
                    src={codingImage}
                />
                </div>
            </div>
            </section>
        );
    }
}