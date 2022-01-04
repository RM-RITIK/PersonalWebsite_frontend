import React, { Component } from "react";
import ContactDataService from "../services/contact.service"

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.newContact = this.newContact.bind(this);

        this.state = {
            fullName: "",
            email: "",
            phone: "",
            message: "",
            submitted: false
        };
    }

    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    saveContact() {
        var data = {
            fullName: "abc",
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        };
        console.log(data);

        ContactDataService.saveContact(data)
            .then(response => {
                this.setState({
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newContact() {
        this.setState({
            fullName: "",
            email: "",
            phone: "",
            message: "",
            submitted: false 
        });
    }

    render() {
        return(
            <div>
                {this.state.submitted ?(
                    <section className="w-full text-gray-900 py-36 bg-center bg-cover">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                    <div class="lg:w-3/6 lg:pr-0 pr-0">
                        <h1 class="font-medium text-5xl text-white">Thank you for your request. Ritik Mehta will 
                        reach out to you shortly :)</h1>
                        <br />
                        <button class="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg" onClick={this.newContact}>Submit Another Request!</button>
                    </div>
                    </div> 
                    </section>                 
                ):
                (
                <section class="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
                style={{"background":"url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280')", "margin":"0px"}}>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                    <div class="lg:w-3/6 lg:pr-0 pr-0">
                        <h1 class="font-medium text-5xl text-white">Contact Me!</h1>
                        <p class="leading-relaxed mt-4 text-white">
                            I would love to work with you. My primary objective will be to deliver a product that 
                            matches your requirements, and do it as quickly and efficently as possible.
                        </p>
                    </div>
                    <div class="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-600" id="fullName">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" required value={this.state.fullName} onChange={this.onChangeFullName} />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" required value={this.state.email} onChange={this.onChangeEmail} />
                        </div>
                        <div class="relative mb-4">
                            <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="text" id="phone" name="phone" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" value={this.state.phone} onChange={this.onChangePhone} />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" rows="4" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" value={this.state.message} onChange={this.onChangeMessage}> </textarea>
                        </div>
                        <button class="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg" onClick={this.saveContact}>Submit</button>
                    </div>
                </div>
                </section>
                )
            }
            </div> 
            
        );
    }
}