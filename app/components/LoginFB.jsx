import React from 'react';

export default class LoginFB extends React.Component {
   constructor(props) {
        super(props);
        if (props.fb){
            this.FB = props.fb;
        }
    }

   componentDidMount() {
       if (this.FB){ 
            this.FB.Event.subscribe('auth.logout', 
              this.onLogout.bind(this));
            this.FB.Event.subscribe('auth.statusChange', 
               this.onStatusChange.bind(this));
        }  
    }
   
    clearStorage() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userID");  
    }	
    onStatusChange(response) {
        if( response.status === "connected" ) {
            localStorage.setItem("accessToken", response.authResponse.accessToken);
            localStorage.setItem("userID", response.authResponse.userID);  
        } else {
            this.clearStorage() 
	 	}
    }
	
    onLogout(response) {
	this.clearStorage();
    }

    render() { 
        return (
            <div>
                <div 
                   className="fb-login-button" 
                   data-max-rows="1" 
                   data-size="small" 
                   data-show-faces="false" 
                   data-auto-logout-link="true"
                   >
                </div>
            </div>
        );
    }
};