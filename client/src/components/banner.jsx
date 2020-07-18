
import React from 'react'
// import {Link} from 'wouter'
// import Catalog from './catalog/catalog'  


  export default class Banner extends React.Component{

    constructor(props) {
        super (props)
        this.state={

        }
    }


    render(){
        return(
            <div>
                <img src={require("../images/banner.jpg")} width='100%' alt="banner"></img>

            </div>
        )
    }
  }
