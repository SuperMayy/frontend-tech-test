import React, {useEffect, useState} from "react";
import { BrowserRouter as Router} from 'react-router-dom'; 
import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Description from "./components/Description";
import Games from "./components/Games";
import Terms from "./components/Terms";
import "./App.css";

const App = () => {
  const [games, setGames] = useState([]);
  const [description, setDescription] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  

  useEffect(() => {
    getData();
  }, [])
  
  const getRequest = "https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda";

  const getData = async () => {
    const response = await fetch(getRequest);
    const data = await response.json();
    setGames(data.games);
	setDescription(data.description);
	setHeaderData({
		title: data.title,
		prizePool: data.prizePool,
		backgroundImage: data.backgroundImage,
		players: data.players,
		startDate: data.startDate.split("T")
	});
  }

	return (
		<Router>
		<div>
			<Header 
			backgroundImage={headerData.backgroundImage}
			title={headerData.title}
			prizePool={headerData.prizePool}
			players={headerData.players}
			startDate={headerData.startDate}
			/>
			<Table/>
			<Description description={description}/>
			<Games games={games}/>
			<Terms />
			<Footer />
		</div>
		</Router>
	);
}

export default App;
