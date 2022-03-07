// let h2 = React.createElement("h2");

class Clock extends React.Component {
    constructor(){
        super()
        this.state = {
            timer: "--:--",
        };
        // this.tick();
    }
    tick = () => {
        this.setState({
            timer: new Date().toLocaleTimeString(),
        });
        setInterval(() => {
            this.state.timer = new Date().toLocaleTimeString();
            this.setState({
                timer: new Date().toLocaleTimeString(),
            });
        },1000)
        
    }
    run = () => {
        this.tick();
    }
    render() {
        console.log("render");
        return (
            <div>
                Timer: {this.state.timer}
                <br />
                <button onClick={this.run}>Run</button>
                <button onClick={this.stop}>Stop</button>
            </div>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById("app"));

