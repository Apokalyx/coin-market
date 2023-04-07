import axios, { Axios } from 'axios';
import { useState, useEffect, Fragment } from 'react';

function Coin() {

    const [data, setData] = useState([])

          // Apiden çekilen veriler
  
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(async (res) => {
        await setData(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    
    
  
    return (
      <>
        <Fragment>
          <div className='container'>
            <div className='result-box'>
              {data.map((element) => (
                <div className='result'>
                  <img src={element.image} alt=''></img>
                  <h4>{element.id}</h4>
                  <p>{element.current_price} $</p>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      </>
    );
  }
  
  export default Coin;
  