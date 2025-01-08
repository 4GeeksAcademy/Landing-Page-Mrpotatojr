import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<div className="">

			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<div className="container d-flex flex-wrap justify-content-center "> 
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</div>
			<Footer className="bg-dark text-white text-center py-3 mt-auto"></Footer>
		</div>
		
	);
};

export default Home;
