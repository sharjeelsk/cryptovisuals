import React from 'react'
import "./List.scss"
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
const TrendingList = (props) => {
    React.useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/exchanges?per_page=100")
        .then(resp=>{
          setList(resp.data)
        })
      },[])
    const [list,setList] = React.useState([]) //users setUsers
    const [pageNumber, setPageNumber] = React.useState(0)
    const listsPerPage =10;
    const pagesVisited=pageNumber * listsPerPage;
    const displayLists = list
    .slice(pagesVisited, pagesVisited+listsPerPage)
    .map(e=>(
            <tr>
            <td><img src={e.image} height={20} width={20} alt={e.name}/></td>
            <td><Link to={`/cryptosearch/${e.name}`}>{e.name}</Link></td>
            <td>{e.trust_score}</td>
            <td>{e.trade_volume_24h_btc}</td>
        </tr>
            ))
    const pageCount = Math.ceil(list.length/listsPerPage);
    const changePage = ({selected})=>{
        setPageNumber(selected)
    }

    return (
        <div class="listdiv">
            {console.log(displayLists)}
            <table class="ui very basic table">
            <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Trust Score Rank</th>
                    <th>Trade Volumne 24h btc</th>
                    </tr>
            </thead>
            <tbody>
                {
                    
                    displayLists
                }
          
            </tbody>
         
            </table>
            <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"PaginationBttns"}
            previousLinkClassName={"PreviousBttn"}
            nextLinkClassName={"NextBttn"}
            disabledClassName={"PaginationDisabled"}
            activeClassName={"PaginationActive"}
            />
        </div>
    );
}

export default TrendingList;