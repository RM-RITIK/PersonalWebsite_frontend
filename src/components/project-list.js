import React, { Component } from "react";
import ProjectDataService from "../services/project.service"
import { CodeIcon } from "@heroicons/react/solid";
import techStackImage from "../images/techStack.png"

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.retrieveProjects = this.retrieveProjects.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.retrieveProjects();
    }

    retrieveProjects() {
        ProjectDataService.getAll()
            .then(response => {
                this.setState({
                    projects: response.data.response.data
                });
                console.log(response.data.response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveProjects();
    }

    render() {
        const { projects } = this.state;
        return(
            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        My Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I have worked on various projects in my career so far in domains ranging from Web Development to Deep Learning
                    </p>
                    </div>
                    <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 select-none">
                    {projects && projects.map((project, index) => (
                        <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 text-white hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50 hover:text-black">
                        <img class="object-cover w-full h-64" src={project.imageUrl} />
                        <div class="p-4">
                          <a href={project.link}><span class="text-blue-600 font-normal text-base">Link</span></a>
                          <p class="font-normal text-base">{project.startTime} - {project.endTime}</p>
                          <p class="font-semibold text-xl py-2">{project.title}</p>
                          <p className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{project.subtitle}</p>
                          <p class="font-light text-gray-600 text-justify line-clamp-3">{project.description}</p>
                          <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
                            <img class="w-10 h-10 rounded-full" src={techStackImage} />
                            <div class="flex flex-col space-y-0">
                              <p class="font-light text-sm">{project.techStack}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                </div>
            </section>
        );
    }
}