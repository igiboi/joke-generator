import React, { Component } from 'react';
import { Button } from 'reactstrap';
import loading from './../images/imessage-gif-1.gif';


class JokeSetup extends Component{
    render(){
    return(<div>
            {
                this.props.jokeLoaded ?
                    <div className="Setup">{this.props.jokeSetup}</div> : <div className="Setup loading">{this.props.jokeLoading}</div>
            }
        </div>)
    }
}

class ToggableBtn extends Component{
    render(){
        const buttonText = this.props.showResult ? 'Hide PunchLine' : 'TELL ME';
        return(
            <div className="App-button-items">
            <Button className="Joke-button" onClick={() => {this.props.showClicked()}}>{buttonText}</Button>
            </div>
        )
    }
}

class Punchline extends Component{
    render(){
        return (
            this.props.showResult ? 
                <div className="Punchline">{this.props.punch}</div>  
                : ''
        )
    }
}


class Joke extends Component{
    state = {
        jokeLoaded: false,
        objResult: {},
        showResult: false,
        error:null,
    }
    
    componentDidMount(){
        this.getJoke()
    }

    getJoke(){
        console.log("Get Joke()")
        setTimeout(() => {
            fetch('https://karljoke.herokuapp.com/jokes/random')
        .then(result => result.json())
        .then(
            (result) => {
                console.log("RESULT", result);
                this.setState({
                    jokeLoaded: true,
                    objResult: result,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    jokeLoaded: false,
                    error: error,
                })
            }
        ) }, 2000);
    }
    
    showClicked = () => {
        if(!this.state.showResult){
            this.setState({
                showResult: true,
            })
        }else{
            this.setState({
                showResult: false,
                error: null
            });
        }
    }

    render(){
        const {error, jokeLoaded, objResult, showResult} = this.state;
        return (
                error ? <div className="Joke-Container">Error: {error.message}</div> : 
                !jokeLoaded ? 
                <div><div className="Joke-Container">
                <JokeSetup 
                            jokeLoading={<img className="Loading-img" src={loading} alt="loading..."/>} 
                        /> 
                </div> 
                <div className="App-button">
                        <ToggableBtn showClicked={this.showClicked} showResult={this.state.showResult}/>
                    </div>
                </div>
                : 
                <div>
                    <div className="Joke-Container">
                        <JokeSetup 
                            jokeLoaded={jokeLoaded} 
                            jokeSetup={objResult.setup}
                            jokeType={objResult.type}
                            showResult={showResult}
                            showClicked={this.showClicked}
                        /> 
                    </div>
                    <div>
                        <Punchline 
                            showResult={showResult}
                            punch={objResult.punchline}
                            getAnotherClicked={this.getAnotherClicked}
                        />
                    </div>
                    <div className="App-button">
                        <ToggableBtn showClicked={this.showClicked} showResult={this.state.showResult}/>
                    </div>
                </div>
        )
    }
}

export default Joke;
