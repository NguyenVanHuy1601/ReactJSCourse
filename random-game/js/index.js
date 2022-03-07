
class SimpleGame extends React.Component {
    constructor () {
        super()
        this.state = {
            numberOfGuessing: 0,
            randomNumber: this.randomNumber(),
            valueNumber: 0,
            message: "",
        };
    }

    randomNumber = () => {
        return Math.ceil(Math.random() * 100);
    }

    guess = () => {
        let {randomNumber, valueNumber, numberOfGuessing} = this.state;
        if (randomNumber > valueNumber){
            this.setState({message:"You guess is smaller"});
        } else if (randomNumber < valueNumber){
            this.setState({message:"You guess is bigger"});
        } else {
            this.setState({message:"You so smart, you guessed True"});
        }
        this.setState({numberOfGuessing: numberOfGuessing + 1, valueNumber:0});
    };

    inputChange = (event) => {
        this.setState({
            valueNumber: Number(event.target.value),
        })
    }

    newGame = () => {
        this.setState({
            numberOfGuessing: 0,
            randomNumber: this.randomNumber(),
            valueNumber: 0,
            message: "",
        })
    }
    render() {
        return (
        <div>
            <div className="header text-center jumbotron " >
                <h1>Guessing random number</h1>
                <p>I random a number from 1-100 , can you guess it???</p>
            </div>
            <div className="main">
                <button onClick={this.newGame}>New Game</button><hr />
                <p>Số lần đã đoán: {this.state.numberOfGuessing}</p>
                <p>Enter your number: </p>
                <input value={this.state.valueNumber} onChange={this.inputChange} type="number" />
                <button className="btn-success" onClick={this.guess}>Đoán</button>
                <p>{this.state.message}</p>
            </div>
        </div>
        );
    };
}

ReactDOM.render(<SimpleGame /> , document.getElementById("app"));
