import React from "react";


export default class Character extends React.Component{
    constructor(props){
        super();
    }
    render(){
        const style = {
            margin: '0 auto',
            background: 'var(--card-color)',
            width: '400px',
            padding: '20px',                    
          };
        return (
            <div style={style}>
                <div>
                    <img src={this.props.url}></img>
                </div>
                <div>{this.props.name}</div>
            </div>
        )
    }

}