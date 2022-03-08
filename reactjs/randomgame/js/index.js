
class SimpleGame extends React.Component {
    constructor(){
        super();
        this.state = {
            numberOfGuessing: 0,
        };
    }

    changeNumberOfGuessing = (numberOfGuessing) => {
        this.setState({numberOfGuessing});
    }

    render() {
        return (
        <div>
            <Header numberOfGuessing={this.state.numberOfGuessing} />
            <Main changeNumberOfGuessing={this.changeNumberOfGuessing} numberOfGuessing={this.state.numberOfGuessing} />
        </div>
        );
    };
}



class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            randomNumber: this.randomNumber(),
            valueNumber: "",
            message:"",
        };
    }
    render(){
        return (
            <div className="main">
                <button onClick={this.newGame}>New Game</button><hr />
                <p>Số lần đã đoán: {this.props.numberOfGuessing}</p>
                <p>Enter your number: </p>
                <input value={this.state.valueNumber} onChange={this.inputChange} type="number" />
                <button className="btn-success" onClick={this.guess}>Đoán</button>
                <p>{this.state.message}</p>
            </div>
        );
    };
    

    guess = () => {
        let {randomNumber, valueNumber} = this.state;
        let {numberOfGuessing } = this.props;
        if (randomNumber > valueNumber){
            this.setState({message:"You guess is smaller"});
        } else if (randomNumber < valueNumber){
            this.setState({message:"You guess is bigger"});
        } else {
            this.setState({message:"You so smart, you guessed True"});
        }
        this.setState({ valueNumber:0});
        this.props.changeNumberOfGuessing(numberOfGuessing + 1);
    };

    randomNumber = () => {
        return Math.ceil(Math.random() * 100);
    };    
    inputChange = (event) => {
        this.setState({
            valueNumber: Number(event.target.value),
        });
    };

    newGame = () => {
        this.setState({
            randomNumber: this.randomNumber(),
            valueNumber: 0,
            message: "",
        });
        this.props.changeNumberOfGuessing(0);
    };
}

class Header extends React.Component {
    constructor(props){
        super(props);
        console.log("props: ", this.props);
    }
    render(){
        return (
            <div className={"header text-center jumbotron "
             + (this.props.numberOfGuessing > 7 ? "bg-danger" : "")
        }>
                <h1>Guessing random number</h1>
                <p>I random a number , can you guess it???</p>
            </div>
        )
    }
    
}
ReactDOM.render(<SimpleGame /> , document.getElementById("app"));
