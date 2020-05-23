import React from "react";
import IconButton from "../components/icon-buttons";
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import StarIcon from '@material-ui/icons/Star';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
const Home = () => {
    return(
        <div className='home-main'>
            <div className='home-header-container'>
                <h1>Feeling lucky?</h1>
                <h3>
                    Test your luck against the roll of the dice and win today
                </h3>
            </div>
            <div className='home-icon-container'>
               <IconButton header='Place bets' icon={<EuroSymbolIcon fontSize='large'/>} text='Correctly guess the dices roll.'  />
               <IconButton header='Win currency' icon={<StarIcon fontSize='large'/>} text='Gain coins if your guess is correct.' />
               <IconButton header='Leaderboard' icon={<SportsHandballIcon fontSize='large'/>} text='Compare your results to others.'  />
            </div>
        </div>
    )
}

export default Home