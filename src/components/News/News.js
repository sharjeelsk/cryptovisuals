import React from 'react'
import "./News.scss"
import axios from "axios"

const News = () => {
    const [news, setNews] = React.useState([])
    React.useEffect(() =>{
        const getData = async ()=>{
             axios.get('https://newsapi.org/v2/everything?q=crypto&language=en&apiKey=06c73c048989400b94ebe59e642b3137')
             .then(response=>{
                console.log(response)
                if(response.data){
                    setNews(response.data.articles)
                }
             })
             .catch(error => console.log(error))
           
        }
        getData()
    },[])
    return (
        
        <div >
            {
                news.map((e,index)=>(
                    index<2?
                    <div class="newsdetaildiv">
                        <h3 class="newsdetailhead">{e.title}</h3>
                        <p class="newsdetailpara">{e.description}</p>
                        <a href={e.url} target="_blank" rel="noreferrer" >click to learn</a>
                        </div>
                        :
                        null
                    ))
            }
        </div>
    );
}

export default News;