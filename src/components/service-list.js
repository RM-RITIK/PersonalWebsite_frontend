import React, { Component } from "react";
import ServicesProvidedDataService from "../services/services-provided.service"

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
        return("Hello for service-list")
    }
}