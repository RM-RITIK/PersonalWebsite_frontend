import React, { Component } from "react";
import ServicesProvidedDataService from "../services/services-provided.service"
import "./service-list.css"

export default class ServiceList extends Component {
    constructor(props) {
        super(props);
        this.retrieveServices = this.retrieveServices.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            services: []
        }
    }

    componentDidMount() {
        this.retrieveServices();
    }

    retrieveServices() {
        ServicesProvidedDataService.getAll()
            .then(response => {
                this.setState({
                    services: response.data.response.data
                });
                console.log(response.data.response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    refreshList() {
        this.retrieveServices();
    }

    render() {
        const { services } = this.state;
        return(
            <div class="pricing-table-2 py-6 md:py-12">
                <div class="container mx-auto px-4">

                    <div class="max-w-3xl mx-auto text-center">
                    <h1 class="text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">My Services</h1>
                    <p class="text-gray-500 xl:mx-12">You have 3 plans to choose from for using FWR blocks. Basic blocks are FREE forever. Other premium blocks are also free. You can use it for your personal or commercial projects. Just don't forget to share our website or give attribution.</p>
                    </div>

                    <div class="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">
                        {services && services.map((service, index) => (
                        <div class="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
                            <div class="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                            <div class="p-6 md:py-8">
                                <h4 class="font-medium leading-tight text-2xl mb-2">{service.serviceName}</h4>
                                <p class="text-gray-600">{service.description}</p>
                            </div>
                            <div class="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                                <div class=""><span class="text-4xl font-semibold">{service.cost}</span></div>
                            </div>
                            <div class="p-6">
                                <ul class="leading-loose">
                                {service.servicesProvided.split("/n").map(sdes => <li>{sdes}</li>)}
                                </ul>
                                <div class="mt-6 py-4">
                                <a href="/hire-me" class="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get Started</a>
                                </div>
                            </div>
                            </div>
                        </div>

                        ))}

                    </div>

                </div>
            </div>
        );
    }
}