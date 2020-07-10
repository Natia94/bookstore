import React, {Component} from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"
import Image from './Image'
import Voting from './Voting'

export default class Card extends Component {
    constructor () {
        super()
        this.state = {
            post: {
                img: "",
                weights: {}
            }
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://api.yup.io/posts/post/12294')
        const data = response.data
        // console.log('data', data)
        this.setState({ 
            post: {
                img: data.previewData.img ,
                weights: data.weights
            }
        }) 
    }

    render () {
        console.log('after render',this.state.post)
        return (
            <div>
            <Image imageUri = {this.state.post}/>
            <Voting weights = {this.state.post}/>
            </div>
        )
    }
}