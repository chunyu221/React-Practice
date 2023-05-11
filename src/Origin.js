import axios from "axios";
import React from "react";

function Component() {

    var jsonData1 = {
  
      "name": "alan", 
      "age": 23,
      "username": "aturing"
  
    }
  
    var jsonData2 = {
      
      "name": "john", 
      "age": 29,
      "username": "__john__"
      
    }
  
    function handlePost() {
      
    //   var formData = new FormData();
    //   formData.append('json1', JSON.stringify(jsonData1));
    // //   formData.append('json2', JSON.stringify(jsonData2));
  
    //   // Send data to the backend via POST
    //   try {
    //     fetch('http://127.0.0.1:5000/callback', {
    //         method: 'POST', 
    //         mode: 'no-cors', 
    //         body: jsonData1 // body data type must match "Content-Type" header
    
    //     })
    //     .then(function(response) {
    //         console.log(response);
    //     })
    //   } catch (err) {
    //     console.error(err);
    //   }
      

        console.log("hhhh")

        //  POST
        axios({
            url: 'http://127.0.0.1:5000/callback',
            method: "post",
            data: {
                name: '123',
                age: '12'
            },
            headers: {
                'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000',
                'Access-Control-Allow-Methods':'GET,POST'
            },
            responseType: "text"
        })
        .then(function(response) {
            console.log("response:")
            console.log(response)
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    function handleGet() {
        console.log("ggg")
        axios({
            url: 'http://127.0.0.1:5000/callback',
            method: "get",
            headers: {
                'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000',
                'Access-Control-Allow-Methods':'GET,POST'
            },
            responseType: "text"
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(err) {
            console.log(err)
        })
    }
  
    return (
        <div>
            <div onClick={handlePost} style={{
                textAlign: 'center',
                width: '100px',
                border: '1px solid gray',
                borderRadius: '5px'
            }}>
                Send data to backend
            </div>
            <div onClick={handleGet} style={{
                textAlign: 'center',
                width: '100px',
                border: '1px solid gray',
                borderRadius: '5px'
            }}>
                GET
            </div>
        </div>
    );
  
    
  }
  
  export default Component ;