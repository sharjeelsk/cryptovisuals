import React from 'react'
import "./List.scss"
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
const List = (props) => {
  const [list, setList] = React.useState([])

    React.useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
        .then(resp=>{
          setList(resp.data)
        })
      },[])
      const [pageNumber, setPageNumber] = React.useState(0)
      const listsPerPage =21;
      const pagesVisited=pageNumber * listsPerPage;
      const displayLists = list
      .slice(pagesVisited, pagesVisited+listsPerPage)
      .map(e=>(
        <tr>
             <td><img src={e.image} height={20} width={20} alt={e.name}/></td>
            <td><Link to={`/cryptosearch/${e.name}`}>{e.name}</Link></td>
            <td>{e.current_price}</td>
            <td>{e.price_change_24h}</td>
            <td class={e.price_change_percentage_24h<0?"red":"green"}>{e.price_change_percentage_24h}</td>
        </tr>
        ))
        const pageCount = Math.ceil(list.length/listsPerPage);
        const changePage = ({selected})=>{
            setPageNumber(selected)
        }
    return (
        <div class="listdiv">
            <h2>{props.Heading}</h2>
            <table class="ui very basic table">
            <thead>
                    <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Current Price</th>
                    <th>Change in Price (24h)</th>
                    <th>Change in Price Percentage (24h)</th>
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

export default List;