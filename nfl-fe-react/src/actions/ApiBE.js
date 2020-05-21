import axios from "axios"; 
import React, {useState, useEffect} from "react"; 

//this is a messag

function ApiBE() {
    const [playerList, setPlayerList] = useState([]);  
    const [isLoading, setIsLoading] = useState(false); 

    const cors = 'https://cors-anywhere.herokuapp.com/'; // don't help anywhere 
    const playerurl = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players.json'; //blocked by cors 

    const queryurl = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players/?Id=1&PlayerFull=4'; 

    // const url = ('https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb.json');

    useEffect(() => {
            setIsLoading(true); 
            console.log(isLoading); 
            

                // axios.get(cors + playerurl)   // undefined console.log empty array
                // axios.get(playerurl)   //blocked by cors 
                axios.get(cors + playerurl)    // undefined console.log empty array

                .then(res => 
                console.log("res", //res.data.values, //res.data,
                // res.data.values),
                res.data.values[0][4]),
                // [0] first person in array of 24, [4] the full name of each player.   
                setIsLoading(false))
            .catch(error => 
                console.log("ApiBE.js: error", error),
                setIsLoading(false));
            
        }, []);  

    return (
    <div> 
        <h3> We have data! </h3> 
        <div> player name:  </div> 
    </div>
    )
}


export default ApiBE; 