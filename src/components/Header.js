import React from 'react';
import logo from './../images/joker.png';
import back from './../images/back.png';
import info from './../images/info.png';
import {
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

    export default class Example extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Nav className="Nav-top">
                    <NavItem>
                      <NavLink href="." className="back-button"><img src={back} alt="back"/><span className="back-text">Get Another Joke</span></NavLink>
                    </NavItem>

                <NavItem>
                    <div className="header-logo">
                        <img src={logo} className="App-logo" alt="logo"/>
                    Joke Generator
                    </div>
                </NavItem>
                    <NavItem>
                      <NavLink href="https://karljoke.herokuapp.com/" target="_blank" ><img src={info} alt="info"/>
                      <br/>
                      <a>View API docs</a>
                      </NavLink>

                    </NavItem>
                  </Nav>
            </div>
          );
        }
      }
