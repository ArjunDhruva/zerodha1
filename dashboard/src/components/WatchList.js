import React, { useEffect, useState } from "react";
import { watchlist } from "../data/data";
import WatchListItem from "./WatchListItem";
import axios from "axios";
import {DoughnutChart} from "./DoughnutChart.js"

const WatchList = () => {
  const [watchlistData, setWatchlistData] = useState([]);

  const labels = watchlistData.map( (data)=> data["name"] );

const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlistData.map( (data)=> data["price"] ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

  useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/watchlist`)
    .then( (res)=>{
       setWatchlistData(res.data);
    })
  },[]);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlistData.map((stock, index)=>{
          return(
            <WatchListItem stock={stock} key={index}/>            
          );
        })}
      </ul>

      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;
