import axios from "axios"; 
import React, {useState, useEffect} from "react"; 

function ApiBE() {
    const [playerList, setplayerList] = useState([]);  
    const [isLoading, setIsLoading] = useState(false); 

    const cors = 'https://cors-anywhere.herokuapp.com/'; // don't help anywhere 
    const playerurl = 'https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb/api/players'; //blocked by cors 


    const url = ('https://data.heroku.com/dataclips/rwhkccnmdgnbgemujsjivyshywlb.json');

    useEffect(() => {
            setIsLoading(true); 
            console.log(isLoading); //false
            
                // axios.get(cors + playerurl)   // undefined console.log empty array
                // axios.get(playerurl)   //blocked by cors 
                axios.get(playerurl)    // undefined console.log empty array
                .then(res => 
                // list = res.data,
                // console.log(list),
                console.log("res.data", res.data),   
                setIsLoading(false))
            .catch(error => 
                console.log("ApiBE.js: error", error),
                setIsLoading(false));
            
            
        }, []);  

    return (
    <div> 
        <h3> We have data! </h3> 
        <div> players </div> 
    </div>
    )
}


export default ApiBE; 