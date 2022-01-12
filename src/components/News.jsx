import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "WKRC TV Cincinnati"
            },
            "author": "WKRC",
            "title": "Rep. Alexandria Ocasio-Cortez recovering after testing positive for Covid-19 - WKRC TV Cincinnati",
            "description": "WASHINGTON (CNN NEWSOURCE/WKRC) - Another member of the US congress has tested positive for COVID-19. According to her official twitter account, representative Alexandria Ocasio-Cortez is recovering at home with coronavirus symptoms Sunday.  The democrat from…",
            "url": "https://local12.com/news/nation-world/rep-alexandria-ocasio-cortez-recovering-after-testing-positive-for-covid-19",
            "urlToImage": "https://local12.com/resources/media/79b169db-c692-48b1-981b-eb1403d596a9-large16x9_AP20206859253615.jpg?1641793330312",
            "publishedAt": "2022-01-10T05:43:03Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Matt Donnelly",
            "title": "On the Ground at the Strangest Golden Globes Ceremony Ever - Variety",
            "description": "Popular on Variety It took three minutes to access the Beverly Hilton driving westbound on Santa Monica Blvd. from Beverly Hills this Sunday. Any other year on Golden Globes night, it would’ve been a nightmare of street closures, clunky shuttle buses, snipers…",
            "url": "https://variety.com/2022/film/news/golden-globes-2022-untelevised-ceremony-strangest-ever-1235149984/",
            "urlToImage": "https://variety.com/wp-content/uploads/2022/01/globes.jpg?w=1000",
            "publishedAt": "2022-01-10T05:27:00Z",
            "content": "It took three minutes to access the Beverly Hilton driving westbound on Santa Monica Blvd. from Beverly Hills this Sunday.\r\nAny other year on Golden Globes night, it would’ve been a nightmare of stre… [+3908 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "\"18 shots in 20 min, nothing has really changed\" - Klay Thompson's Post Game Press Conference - NBA",
            "description": "Stream More Live Games With NBA LEAGUE PASS: https://app.link.nba.com/e/subscribe_nowSubscribe to the NBA: https://on.nba.com/2JX5gSN",
            "url": "https://www.youtube.com/watch?v=S6qOoUzurj4",
            "urlToImage": "https://i.ytimg.com/vi/S6qOoUzurj4/maxresdefault.jpg",
            "publishedAt": "2022-01-10T05:22:28Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Coronavirus Surge Latest: Los Angeles County Reports Yet Another Record-High in Cases - CBS Los Angeles",
            "description": "Doctor Michael Daignault, with Providence St. Joseph Medical Center, joined the studio to discuss the recent surge in COVID-19 cases, the Omicron variant, an...",
            "url": "https://www.youtube.com/watch?v=aDWPPVnOmeE",
            "urlToImage": "https://i.ytimg.com/vi/aDWPPVnOmeE/hqdefault.jpg",
            "publishedAt": "2022-01-10T05:01:12Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Shimao puts residential projects on sale as China property woes deepen - Reuters",
            "description": "<a href=\"https://www.reuters.com/markets/rates-bonds/chinese-developer-shimao-puts-all-property-projects-sale-caixin-2022-01-10/\" target=\"_blank\">Shimao</a> has put all its projects on sale, local media reported, as Chinese property developers face <a href=\"h…",
            "url": "https://www.reuters.com/markets/europe/modern-land-shares-dive-after-some-bondholders-demand-early-repayment-2022-01-10/",
            "urlToImage": "https://www.reuters.com/resizer/VHHMiF85wGmjh4837YLyGrBuhGM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CETORWCN75JXXGSDSSXZ5HRA2I.jpg",
            "publishedAt": "2022-01-10T04:54:00Z",
            "content": "HONG KONG, Jan 10 (Reuters) - Shimao has put all its projects on sale, local media reported, as Chinese property developers face mounting pressure to negotiate with their creditors to ease a liquidit… [+3937 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WKRC TV Cincinnati"
            },
            "author": "WKRC",
            "title": "Scientists film the death of a red supergiant for the first time - WKRC TV Cincinnati",
            "description": "BERKELEY, Calif. (WKRC) - For the first time, the death of a red supergiant was filmed by scientists on Thursday. Northwestern University and the University of California scientists say that the star's explosive death has been a \"breakthrough\" in understandin…",
            "url": "https://local12.com/news/nation-world/scientists-film-the-death-of-a-red-supergiant-for-the-first-time-astronomy-star-sun-science-radiation-light-scientist-research-galaxy-raffaella-margutti-wynn-jaconson-galan-berkley-california-cincinnati-ohio",
            "urlToImage": "https://local12.com/resources/media/e3912fc8-c9ba-4074-a8ba-dbe9e899a0de-large16x9_milkyway.png?1641786568529",
            "publishedAt": "2022-01-10T04:47:23Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NBC 10 Philadelphia"
            },
            "author": "Reuben Frank",
            "title": "Eagles to Face Tom Brady and the Buccaneers in the Wild Card Round - NBC 10 Philadelphia",
            "description": "The Eagles finally know which team they will face next weekend in the wild card round: Tom Brady and the Tampa Bay Buccaneers.",
            "url": "http://www.nbcphiladelphia.com/news/sports/eagles/eagles-to-face-tom-brady-and-the-buccaneers-in-the-wild-card-round/3102006/",
            "urlToImage": "https://media.nbcphiladelphia.com/2021/12/Hurts_J_USATSI_17412785.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2022-01-10T03:39:35Z",
            "content": "Eagles finally learn their first-round playoff opponent originally appeared on NBC Sports Philadelphia\r\nThe Eagles will open the 2022 playoffs in Tampa next weekend against Tom Brady and the Super Bo… [+2381 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=IN&apiKey=b32d0fd96a86430a96c189b917b72382";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles: parseData.articles});
    }
    render() {
        return (
            <div className="container" >
                <h2 className="my-4">All NEWS</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={element.url?element.url:''}>
                                <NewsItem title={element.title} description={element.description?element.description.slice(0,80):''} imgUrl={element.urlToImage?element.urlToImage:'https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg'} newsUrl={element.url?element.url:''} publishedAt={element.publishedAt?element.publishedAt.slice(0,10):''} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
