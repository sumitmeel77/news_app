

import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid justify-content-start ">
                    <a className="navbar-brand" href="/">NEWS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>

                    </div>
                    <div class="dropdown me-auto mb-2 mb-lg-0  text-left justify-content-start ">
                        <button class="btn btn-primary dropdown-toggle btn-dark pull-left" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <a className="dropdown-item" href="/business">business</a>
                            <a className="dropdown-item" href="/entertainment">entertainment</a>
                            <a className="dropdown-item" href="/health">health</a>
                            <a className="dropdown-item" href="/science">science</a>
                            <a className="dropdown-item" href="/sports">sports</a>
                            <a className="dropdown-item" href="/technology">technology</a>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

