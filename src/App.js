import React, {Component} from "react";
import './estilo.css';
import text from './components/phrases';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            phrase: ''
        };

        this.phrases = [
            ...text
        ];

        this.openCookie = this.openCookie.bind(this);
    }

    openCookie(){
        let randomNumber = Math.floor(Math.random() * this.phrases.length); 
        this.setState({phrase: this.phrases[randomNumber]});
    }

    render() {
        return (
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao text="Open cookie" actionBtn={this.openCookie}/>
                <h3 className="phrase">{this.state.phrase}</h3>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.actionBtn}>{this.props.text}</button>
            </div>
        );
    }
}

export default App;