import React, { Component } from "react";
import ExperienceDataService from "../services/experience.service";
import "./experience-list.css"

export default class ExperienceList extends Component {
    constructor(props) {
        super(props);
        this.retrieveExperience = this.retrieveExperience.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            experiences: []
        };
    }

    componentDidMount() {
        this.retrieveExperience();
    }

    retrieveExperience() {
        ExperienceDataService.getAll()
            .then(response => {
                this.setState({
                    experiences: response.data.response.data
                });
                console.log(response.data.response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveExperience();
    }

    render() {
        const { experiences } = this.state;
        return(
            <section>
                <div class="bg-gray-900 text-white py-8">
                <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                    <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">My Expereinces</p>
                    <p class="text-sm md:text-base text-gray-50 mb-4 text-justify">
                    I have a all-round experience of working in a corporate environment as well as research. I have developed various product
                    from scratch for companies such as MBA And Beyond and Sellebrate. I have also worked as a Research Assistant at
                    Graphic Reseearch Group, IIITD and Delhi Technological University
                    </p>
                    <a href="#"
                    class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                    Hire Me</a>
                </div>
                <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
                    <div class="container mx-auto w-full h-full">
                    <div class="relative wrap overflow-hidden p-10 h-full">
                        <div class="border-2-2 border-yellow-555 absolute h-full border exp-right"></div>
                        <div class="border-2-2 border-yellow-555 absolute h-full border exp-left"></div>
                        {experiences && experiences.map((exp, index) => (
                            <div>
                            {Number(index)%2 === 0?(
                                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div class="order-1 w-5/12"></div>
                                <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <img class="object-cover w-full" src = {exp.companyLogoUrl} style={{"background": "gray", "marginBottom": "10px"}}/>
                                <p class="mb-3 text-base text-yellow-300">{exp.startDate} - {exp.endDate}</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">{exp.organization}</h4>
                                <p class="mb-3 text-base text-yellow-300">{exp.role}</p>
                                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-justify display-linebreak">
                                {
                                    exp.description
                                        ? exp.description.split("/n").map(place => <p> {place} </p>) 
                                        : ""
                                    }
                                </p>
                                </div>
                            </div>
                            ):
                            (
                                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                                <div class="order-1 w-5/12"></div>
                                <div class="order-1 w-5/12 px-1 py-4 text-right">
                                <img src = {exp.companyLogoUrl} />
                                <p class="mb-3 text-base text-yellow-300">{exp.startDate} - {exp.endDate}</p>
                                <h4 class="mb-3 font-bold text-lg md:text-2xl">{exp.organization}</h4>
                                <p class="mb-3 text-base text-yellow-300">{exp.role}</p>
                                <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-justify display-linebreak">
                                {
                                    exp.description
                                        ? exp.description.split("/n").map(place => <p> {place} </p>) 
                                        : ""
                                    }
                                </p>
                                </div>
                            </div>   
                            )}
                            </div>
                        ))}

                    </div>
                    <br/>
                    <br/>
                    <img class="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                    </div>
                </div>
                </div>
                </div>
            </section>
        );
    }
}