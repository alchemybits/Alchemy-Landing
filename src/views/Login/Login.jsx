import "./Login.css";
import React from "react";
import Loading from "../../components/Loading/Loading";

import GridContainer from "components/Grid/GridContainer.jsx";
const primaryColor = "#2E4052";

function template() {
  return this.state.loading === true ? (
    <Loading />
  ) : (
    <div className="Lcontainer">
      <GridContainer>
        <div className="container">
          <div className="card" />
          <div className="card">
            <h1 className="title">Login</h1>
            <form onSubmit={this.userLogin}>
              <div className="input-container">
                <input
                  type="text"
                  id="email"
                  required="required"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Email</label>
                <div className="bar" />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  id="password"
                  required="required"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <div className="bar" />
              </div>
              <div className="button-container">
                <button>
                  <span>Go</span>
                </button>
              </div>
              <div className="footer">
                <a>Forgot Password?</a>
              </div>
            </form>
          </div>
          <div className="card alt">
            <div
              className="toggle"
              style={{ background: primaryColor }}
              onClick={e => this.toggleClass(e)}
            />
            <h1 className="title">
              Register
              <div className="close" onClick={e => this.toggleClass(e)} />
            </h1>
            <form onSubmit={this.register}>
              <div className="input-container">
                <input
                  type="text"
                  id="rusername"
                  required="required"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
                <label htmlFor="rusername">Name</label>
                <div className="bar" />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  id="remail"
                  required="required"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
                <label htmlFor="remail">Email</label>
                <div className="bar" />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  id="rpassword"
                  required="required"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <div className="bar" />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  id="rrpassword"
                  required="required"
                  value={this.state.rpassword}
                  name="rpassword"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Confirm Password</label>
                <div className="bar" />
              </div>
              <div className="button-container">
                <button>
                  <span>Next</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </GridContainer>
    </div>
  );
}

export default template;

// <!-- Portfolio--><a id="portfolio" href="http://andytran.me/" title="View my portfolio!"><i className="fa fa-link"></i></a>
// <!-- CodePen--><a id="codepen" href="https://codepen.io/andytran/" title="Follow me!"><i className="fa fa-codepen"></i></a>
