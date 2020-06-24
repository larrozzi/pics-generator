import React from 'react'

class SearchBar extends React.Component{
    // onInputChange(event){ // event is a js object  uncontrolled of event handling
    //     console.log(event.target.value)
    // }

    state= { term: ''} //controlled way of event handling

    onFormSubmit= (event) => { // arrow function instead onFormSubmit(event)
        event.preventDefault();
        this.props.trigOnSubmit(this.state.term) //this.props because it's in a class based component
        //console.log(this.state.term)
    }
    //OR
    // onFormSubmit(event){ 
    //     event.preventDefault();
    //     console.log(this.state.term)
    // } with an arrow function in the property onSubmit
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div>
                    <label>Image Search</label>
                    <input 
                        type = 'text' 
                        value={this.state.term} 
                        onChange={e => this.setState({term: e.target.value})}
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar

//onChange, onClick, onSubmit are all props that handle events 