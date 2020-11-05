import React, {useState, useEffect} from 'react';
import refresh from "../images/refresh.svg";

const Table = () => {
    
    const [prizeLists, setPrizeList] = useState([]);

    const getRequest = "https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda";

    useEffect(() => {
        getPrizeList();
      }, [])

    const getPrizeList = async () => {
    const response = await fetch(getRequest);
    const data = await response.json();
	  setPrizeList(data.prizeList);
	  console.log(data.prizeList)
    }


    return (
        <>
        <div className="prizeSection">
            <div className="prizeContent">
              <h1 className="subheader">Prize List</h1>
              <button className="btnRefresh" onClick={getPrizeList} data-testid="refreshBtn">
              <img src={refresh} 
              alt="user icon" 
              className="refresh"
              /></button>
            </div>
            <hr className="hr1"/>
        </div>
        <div className="table">
            <div className="tableContent">
                <table cellSpacing="0" data-testid="table">
                <thead>
                  <tr>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                    {prizeLists.map((prizeList, index) => (
                      <tr key={prizeList.title}>
                        <td className="prizeNumber">{index + 1}</td>
                        <td className="prizeName">{prizeList.title}</td>
                        <td>{prizeList.total}</td>
                      </tr>
                    ))}
                </tbody>
                </table>
            </div> 
        </div>
        <hr className="hr2"/>
        </>
    )
}

export default Table;
