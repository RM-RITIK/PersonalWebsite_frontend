import React, { Component } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import ritikMehta from "../images/ritikMehta.jpg"

export default class NavBar extends Component {
    render(){
        return(
            <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center w-auto">
                    <img class="h-8 w-8 rounded-full h-8 w-auto" src={ritikMehta} alt=""/>
                    &nbsp;&nbsp;
                    <a href = "/" class = "text-white">Ritik Mehta</a>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        <a href="/experiences" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</a>

                        <a href="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                        <a href="/skills" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>

                        <a href="/blogs" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                    </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a href="/hire-me" className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-gray-300 hover:bg-gray-700 hover:text-white mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>

                </div>
                </div>
            </div>

            <div class="sm:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="/experiences" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Experience</a>

                <a href="/projects" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                <a href="/skills" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>

                <a href="/blogs" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
                </div>
            </div>
            </nav>
        );
        
    }
}