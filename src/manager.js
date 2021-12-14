import React from 'react';
import  axios  from 'axios';

  export default function Manager(){
    
   
        const [data, setData] = React.useState(null);
        const response =  axios.get("https://api.coinlore.net/api/global/")
        .then(function(res) {
            setData(res.data)
          })
        .catch(
            alert("Error while loading data"),
        
        )
        return this.state.data
    
  }