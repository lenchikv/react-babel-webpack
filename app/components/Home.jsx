import React from 'react';
import { Link } from 'react-router'
import Menu from "./Menu";
//import LoginFB from './LoginFB';

export default class Home extends React.Component {	
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello from posts",
            message: ""
        };
    }
    componentDidMount() {
        this.onLoad();  
    }
    onLoad() {
        var self = this;
        var accessToken = localStorage.getItem("accessToken");
        if (!accessToken || !FB) {
            self.setState({
                message: "Please authorize"
            });    
        }
        else {
             FB.api('/v2.7/me',  { access_token: accessToken, fields: 'id,name' }, 
                function(response) {
                    console.log("Got posts");		
                    console.log(response);
                    self.setState({title: "Posts from " + response.name});
                    //console.log(self.state.title);
            }   );
            //returns 0 due unaproved token permissions
            /*FB.api('/v2.7/me/posts?limit=10',  { access_token: accessToken },
                function(response) {
                     console.log("TTThere");
                    console.log(response);
            }   );*/
        };
        
    }	
    
    render() {
        var feed = [{
                "message": "https://www.youtube.com/watch?v=dX9uMMwR6Vo",
                "created_time": "2016-07-04T17:59:36+0000",
                "id": "1059198060831505_1048603718557606"
            },
            {
                "story": "Elena Vygovska updated her profile picture.",
                "created_time": "2016-01-23T15:33:28+0000",
                "id": "1059198060831505_949481461803166"
            },
            {
                "message": "http://m.habrahabr.ru/company/abbyy/blog/104083/ Всегда было интересно",
                "created_time": "2015-11-22T12:06:24+0000",
                "id": "1059198060831505_917174961700483"
              },
              {
                "message": "http://m.pikabu.ru/story/pochemu_ya_khochu_stat_programmistom_sochinenie_7letnego_tarasa_po_teme_kem_ya_khochu_stat_kogda_ya_budu_bolshim_770881",
                "created_time": "2015-09-25T15:26:53+0000",
                "id": "1059198060831505_894005334017446"
              },
              {
                "story": "Elena Vygovska shared a link.",
                "created_time": "2014-05-19T17:28:31+0000",
                "id": "1059198060831505_635909386493710"
              },
              {
                "story": "Elena Vygovska shared a link.",
                "created_time": "2014-04-28T19:31:50+0000",
                "id": "1059198060831505_624597434291572"
              },
        ];
        var feedList = feed.map(function(feed){
                        return  <li key={feed.id}><div  className="row"><a href="#" id={feed.id}>{feed.message}{feed.story}</a>
                                    <br /><div className="date">{feed.created_time.toString('dd.MM.yyyy HH:MM')}</div>
                                </div></li>
                      })
    	return (
            <div>
                 <Menu />
                <section>
                    <h2>{this.state.title}</h2>
                    <p>{this.state.message}</p>
                        <ul>{ feedList }</ul>
                </section>
            </div>
    )
}
}
