import './App.css'

import React from 'react'

export default class Alert extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.results,
                })
            })

    }

    render(){
        var {items,isLoaded } = this.state;

        if (!isLoaded){
            return <div>Loading Characters</div>
        } else{
            return (
                <div className="App">
                    <table>
                        <tr>
                            <th>Character</th>
                            <th>|</th>
                            <th>Height </th>
                            <th>|</th>
                            <th>Mass </th>
                            <th>|</th>
                            <th>Hair </th>
                            <th>|</th>
                            <th>Skin </th>
                            <th>|</th>
                            <th>Eyes </th>
                            <th>|</th>
                            <th>Birth-year </th>
                            <th>|</th>
                            <th>Gender </th>
                        </tr>
                        {items.map((item)=>
                            <tr>
                                <th>{item.name}</th>
                                <th>~</th>
                                <th>{item.height} </th>
                                <th>~</th>
                                <th>{item.mass} </th>
                                <th>~</th>
                                <th>{item.hair_color} </th>
                                <th>~</th>
                                <th>{item.skin_color} </th>
                                <th>~</th>
                                <th>{item.eye_color} </th>
                                <th>~</th>
                                <th>{item.birth_year} </th>
                                <th>~</th>
                                <th>{item.gender} </th>
                            </tr>
                        )}
                    </table>
                </div>
            )
        }
    }

}