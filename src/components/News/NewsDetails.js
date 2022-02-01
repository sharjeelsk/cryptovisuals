import React from 'react'
import "./News.scss"
import axios from "axios"

const NewsDetails = () => {
    const [news, setNews] = React.useState([])
    React.useEffect(() =>{
        const getData = async ()=>{
            const response = await axios.get('https://newsapi.org/v2/everything?q=crypto&language=en&apiKey=06c73c048989400b94ebe59e642b3137')
            console.log(response)
            if(response.data){
                setNews(response.data.articles)
            }
        }
        getData()
    },[])
    return (
        
        <div style={{textAlign:"center"}}>
            <h2 class="newshead">Latest News</h2>
            {
                news.map((e,index)=>(
                    <div class="newsdetaildiv">
                        <h3 class="newsdetailhead">{e.title}</h3>
                        <p class="newsdetailpara">{e.description}</p>
                        <a href={e.url} target="_blank" rel="noreferrer">click to learn</a>
                        </div>
                      
                    ))
            }
        </div>
    );
}

export default NewsDetails;