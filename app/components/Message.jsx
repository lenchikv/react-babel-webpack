import React from 'react';
//require('./App.css');

import { Link } from 'react-router'
import Menu from "./Menu";
import LoginFB from './LoginFB';

export default class Message extends React.Component {	
    constructor(props) {
        super(props);

	this.onSubmit = this.onSubmit.bind(this);
	this.onChange = this.onChange.bind(this);
	this.state = {
		  message: "",
		  value: ""
        };
    }

    onChange(e) {
            //console.log(this.refs.status.value);
            this.setState({value: this.refs.status.value});
    };

    onSubmit() {
        if (this.state.value == '') {
            this.setState({
                    message: "Insert value before post!"
            });
        } else {
            var self = this;
            var body = self.state.value;
            FB.api('/v2.7/me/feed', 'post', { message: body }, 
                        { access_token: localStorage.getItem("accessToken") }, function(response) {
                if (!response || response.error) {
                              console.log("Error");
                              console.log(response.error.message);
                              self.setState({
                                 message: response.error.message
                                });
                }
                else {
                    alert('Post ID: ' + response.id);
                    self.setState({
                    message: "Status sent successfully!",
                    value: ""
                      });  
                }    
            ;

        });
     }	
    }
    render() { 
        return (
            <div>
              <Menu />
              <section>
                <h2>Post new message to FB</h2>
                <form onSubmit={this.onSubmit} className="MyForm">
                    <textarea 
                        //defaultValue="Hello!"
                        ref="status" 
                        value={this.state.value} 
                        onChange={this.onChange}
                        placeholder="What do you thinking about..."/>
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.message}</p>
              </section>
            </div>
    ) } 
}
