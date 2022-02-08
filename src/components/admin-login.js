import React, { Component } from "react";
import  UserDataService  from "../services/user.service"

export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            submitted: false,
            message: ""
          };
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
    }

    handleLogin() {
        console.log(this.state.username);
        console.log(this.state.password);

        var data = {
            email: this.state.username,
            password: this.state.password
        }

       UserDataService.login(data)
        .then(response => {
            if(response.token) {
                console.log(response.token);
                this.setState({
                    submitted: true
                })
            }
            else {
                this.setState({
                    message: "Authentication Falied"
                })
            }
        })
        .catch(error => {
            console.log(error);
            this.setState({
                message: "Authentication Failed or Cannot Login"
            })
        })

        
    }

    render() {
        return(
        <div className="bg-white dark:bg-gray-900">
            {this.state.submitted? (
                <section className="w-full text-gray-900 py-36 bg-center bg-cover">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                <div class="lg:w-3/6 lg:pr-0 pr-0">
                    <h1 class="font-medium text-5xl text-white">Welcome Ritik Mehta!</h1>
                    <br />
                </div>
                </div> 
                </section>  
                

            ): (
                <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{"backgroundImage": "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"}}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Ritik Mehta</h2>
                            
                            <p className="max-w-xl mt-3 text-gray-300">In the current version, only the admin can login and add blogs. We will shortly be 
                            back with a version where all users can create their personal accounts. Happy Coding :)</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Ritik Mehta</h2>
                            
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>
    
                        <div className="mt-8">
                            <form>
                                <div>
                                    <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input type="email" value={this.state.username} onChange={this.onChangeUsername} name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
    
                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label for="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    </div>
    
                                    <input type="password" value={this.state.password} onChange={this.onChangePassword} name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </form>
                            <div className="mt-6">
                                    <button
                                        onClick={this.handleLogin}
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                <div className="text-white">{this.state.message}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            )}
            
        </div>
        )
    }
}