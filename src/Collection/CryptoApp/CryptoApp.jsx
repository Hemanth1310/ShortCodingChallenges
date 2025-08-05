import React, { useEffect, useState } from 'react'
import './CryptoApp.css'


const CryptoApp = () => {

    const [cryptoData, setCryptoData] = useState([])
    const [loading,setLoading] = useState(true)
    const [searchVal,setSearchVal] = useState('')

    const handleData = (data)=>{
        setCryptoData(data)
        setLoading(false)
        
    }

useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'wwqgIpWlpFY/ekPBglcbhyFL/GAUd/8sfFjfwkAaESY='
        }
      };
      
      fetch('https://openapiv1.coinstats.app/coins', options)
        .then(res => res.json())
        .then(res =>{console.log(res);handleData(res.result)})
        .catch(err => console.error(err));

        setTimeout(()=>console.log("hell"),[1000])
    
},[])
  return (
    <div className='crypto'>
        <h1>List of Crypto Coins</h1>
        <input type="text" name="search" value={searchVal} placeholder='Search Here' onChange={e=>setSearchVal(e.target.value)}/>
        <div className='crypto-coins-container'>
                
                <table>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Available Supply</th>
                        <th>Volume</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading? <div>Loading...</div>:null}
                    {cryptoData.filter((val)=>(val.name.toLowerCase().includes(searchVal.toLowerCase()))

                    ).map((coin,index)=>
                        <tr key={index}>
                            <td>{coin.rank}</td>
                            <td>
                                <div className='crypto-coin'>
                                    <img src={coin.icon}/>
                                    <p>{coin.name}</p>
                                </div>
                            </td>
                            <td>{coin.symbol}</td>
                            <td>${coin.marketCap}</td>
                            <td>{coin.price.toFixed(2)}</td>
                            <td>{coin.totalSupply}</td>
                            <td>{coin.volume.toFixed(0)}</td>
                        </tr>
            
                    )}
                    </tbody>
                  
                </table>
                
        </div>
      
    
    </div>
  )
}

export default CryptoApp