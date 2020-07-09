import React, {Component} from 'react'

export default function Image(props) {
    console.log("image", props)
    return (
     <div>
         <img src ={props.props}/>
     </div>
    )
}