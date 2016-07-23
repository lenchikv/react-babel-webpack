import React from 'react';
import { Link } from 'react-router'
import Menu from "./Menu";

export default class Like extends React.Component {	
    constructor(props) {
        super(props);
        this.state = {
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
            FB.api('me/likes?fields=name,picture{url},username&limit=10',  { access_token: accessToken, fields: 'id,name, url' }, 
                function(response) {
                    console.log("Got likes");
                    console.log(response);
            }   );
        };
        
    }	

    render() {
        var likes = [
            {
              "name": "Paloma&Pigeon",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c8.0.50.50/p50x50/12523086_502684293243032_4365237262333256139_n.jpg?oh=8d683bdb54ee7a15d88bd4a7d7e03cf3&oe=581D6165"
                }
              },
              "id": "502683386576456"
            },
            {
              "name": "Ternopil JS",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11146178_1662201450691553_9015697575973663088_n.png?oh=6bafb3d5fded1b29622effedc6cec4b7&oe=583554A8"
                }
              },
              "id": "1662196324025399"
            },
            {
              "name": "ПресЦентр Дитячий Світ",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12644724_1106050709413565_2250568337340535344_n.jpg?oh=337d024b463767d8a1412a6e3ac0a24e&oe=5832B93B"
                }
              },
              "id": "1106027689415867"
            },
            {
              "name": "Prescentr Kiev",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11904057_385669838297041_287022064691708560_n.jpg?oh=8dd87d9b5345ccde28627861f5dd7083&oe=58185774"
                }
              },
              "id": "385669764963715"
            },
            {
              "name": "Кіно-ОКО",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.50.50/p50x50/12246872_1001263386584126_1985085096012059820_n.jpg?oh=f57acd9e59bebf59f0b2c00c2665b2fb&oe=581891B4"
                }
              },
              "id": "847024222008044"
            },
            {
              "name": "Voices of Ukraine - Official",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c1.0.50.50/p50x50/1175437_621893777894456_1960313856248965958_n.jpg?oh=2ad75efd6ffe5c72b7ab454c354cdffe&oe=57E8ED0B"
                }
              },
              "id": "553978201352681"
            },
            {
              "name": "Numus Software",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11159474_821123681276545_2228006221549403136_n.jpg?oh=afb7d8a39047f2c7a260c5e063492d07&oe=581AFCE0"
                }
              },
              "id": "156612431061010"
            },
            {
              "name": "Microsoft Ukraine",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/308466_416994401681716_120404802_n.jpg?oh=69b33ed7d62266fe37be7b338eeeecfa&oe=582FE6AF"
                }
              },
              "id": "131189920262167"
            },
            {
              "name": "Бухгалтерский бум",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c17.17.207.207/s50x50/484833_128906423981417_977025616_n.jpg?oh=f7a30596133567b6cc7eb06faf085e9e&oe=581BE6D9"
                }
              },
              "id": "128905480648178"
            },
            {
              "name": "WikiPaintings.org",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/563072_295217537216555_1373127415_n.jpg?oh=d8ff377ce417722a8e32234c3e8e4fcb&oe=57EC8B1F"
                }
              },
              "id": "138015069603470"
            },
            {
              "name": "Artem Diveev",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c23.0.50.50/p50x50/12717785_1023034114427825_8513428101788238706_n.png?oh=bfc6e17d3ca6506416bf64f1565cd2b2&oe=5825C3D3"
                }
              },
              "id": "122493631148549"
            },
            {
              "name": "SA Summit LLC",
              "picture": {
                "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c13.13.164.164/s50x50/58427_426124834129614_743095077_n.jpg?oh=bd2ff5c3a76919b8c379554ea75e781c&oe=57EB8A69"
                }
              },
              "id": "119805891428178"
            }
        ];
        var likesList = likes.map(function(likes){
            return  <li key={likes.id}>
                        <img src={likes.picture.data.url} alt={likes.name} id={likes.id} />
                        <span className="liked">{likes.name}</span>
                    </li>
            });
        return (
            <div>
                <Menu />
                <section>
                    <h2>Liked pages</h2>
                    <p>{this.state.message}</p>
                    <ul>{ likesList }</ul>
                </section>
            </div>
            )
    }
}