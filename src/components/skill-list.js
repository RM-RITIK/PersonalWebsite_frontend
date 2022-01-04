import React, { Component } from "react";
import SkillDataService from "../services/skill.service";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default class SkillList extends Component {
    constructor(props) {
        super(props);
        this.retrieveSkills = this.retrieveSkills.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        this.retrieveSkills();
    }

    retrieveSkills() {
        SkillDataService.getAll()
            .then(response => {
                this.setState({
                    skills: response.data.response.data
                });
                console.log(response.data.response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveSkills();
    }

    render() {
        const { skills } = this.state;
        return(
            <section id="skills">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4 text-white" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill, index) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                        <div class="w-full p-4 justify-start flex flex-col bg-gray-800">
                            <h4 class="text-3xl text-white"> {skill.category}</h4>
                            <p class="my-4 text-gray-300">{skill.technologies}</p> 
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        );
    }
}