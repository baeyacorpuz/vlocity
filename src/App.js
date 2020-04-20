import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import People from './People.json';

class App extends Component {

  createRating = (rating) => {
    let rate = []
    for (let i = 0; i < rating; i++) {
      rate.push(
        <FontAwesomeIcon icon={faStar} />
      )
    }

    return rate;
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light fixed-top">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div>
            <div class="dropdown">
              <a href="#" className="dropdown-toggle navbar-brand" data-toggle="dropdown">
                <img src="http://www.fillmurray.com/200/200" alt="user-profile" className="image-dropdown" />
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="collapse navbar-collapse col-md-2 d-none d-md-block bg-light sidebar" id="bs-sidebar-navbar-collapse-1">
          <div className="sidebar-sticky">
            <ul className="nav nav-tabs flex-column">
              {
                People.map((data, index) => (
                  <li key={index} className="nav-item flex-column">
                    <a className={"nav-link " + (index === 0 ? "active" : "")} data-toggle="tab" href={"#" + index} >{data.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>

        <section id="main" className="container">
          <div className="tab-content">
            {
              People.map((data, index) => (
                <div id={index} className={index === 0 ? "tab-pane fade active show" : "tab-pane fade"}>
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="card">
                        <div className="card-body">
                          <img className="rounded mx-auto d-block img-fluid" src={data.img} alt="Card image cap" />
                          <h5 className="card-title text-center">{data.name}</h5>
                          <div className="rating">
                            <p className="text-center">
                              {this.createRating(data.rating)}
                            </p>
                          </div>

                          <button className="btn btn-warning btn-block" >Send Message</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12">
                      <p>
                        {data.Description}
                      </p>
                      <div>
                        <table class="table table-sm">
                          <thead>
                            <tr>
                              <th>Likes</th>
                              <th>Dislikes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.Likes.map((like, index) => (
                                <tr>
                                  <td>{like}</td>
                                  <td>{data.Dislikes[index]}</td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </>
    );
  }
};

export default App;
