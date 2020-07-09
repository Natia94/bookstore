import React, {Component} from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"
import Image from './Image'
export default class Post extends Component {
    constructor () {
        super()
        this.state = {
            post: {

            }
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://api.yup.io/posts/post/12294')
        const data = response.data.previewData.img 
        this.setState({ post: data}) 
    }

    render () {
        console.log(this.state.post)
        return (
            <div>
                <Image props = {this.state.post}/>
            </div>
        )
    }
}