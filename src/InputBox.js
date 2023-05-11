import axios from 'axios';
import React from 'react'
import { Card, Form, Input } from 'shineout'
// import {Form} from 'react-router-dom'

// class InputBox extends React.Component {

//     render() {
//         return (
//             <Form
//                 onSubmit={data => {
//                     console.log(data)
//                   }}    
//             >
//                 <Input.Group style={{padding: '5% 15%'}}>
//                     <Input 
//                         placeholder="Model Name" 
//                         name="ModelName"
//                     />
//                     <Input 
//                         placeholder="File/text" 
//                         name="input"
//                         style={{width: 360}} 
//                     />
//                     {/* <button type='submit'>Search</button> */}
//                     <Card.Submit>Compute</Card.Submit>
//                 </Input.Group>
//             </Form>
            
//         )
//     }
// }

const InputBox=()=>{

    return(
        <Card style={{padding: '5% 15%'}}>
            <Form
                onSubmit={data => {
                    console.log(data)
                    // axios({
                    //     url: 'http://127.0.0.1:5000/callback',
                    //     method: "post",
                    //     data: data,
                    //     headers: {
                    //         'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000',
                    //         'Access-Control-Allow-Methods':'GET,POST'
                    //     },
                    //     responseType: "json"
                    // })
                    // .then(function(response) {
                    //     console.log("response:")
                    //     console.log(response)
                    // })
                    // .catch(function(err) {
                    //     console.log(err)
                    // })

                    axios({
                        url: 'http://127.0.0.1:5000/callback',
                        method: "get",
                        params: data,
                        headers: {
                            'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000',
                            'Access-Control-Allow-Methods': 'GET,POST'
                        },
                        responseType: "json"
                    })
                    .then(function(response) {
                        console.log("response:")
                        console.log(response)
                    })
                    .catch(function(err) {
                        console.log(err)
                    })
                }}
            >
                <Input.Group>
                    <Input name="modelName" placeholder="model name" />
                    <Input name="input" placeholder="input text or file" />
                    <Card.Submit>Compute</Card.Submit>
                </Input.Group>

            </Form>             
        </Card>
        // <Form id='search-form' role='search'>
        //     <input 
        //         type='search' 
        //         id='q'
        //         name='q'
        //     />
        //     <button type='submit' />
        // </Form>
        
    )
}

export default InputBox