//HTML form elements

//Controlled components such as <input>, <textarea> and <select>
//maintain their own state and update it based on user input.
//In react, mutable state is typically kept in the state properly
//of components, and only updated with setState()

//handling multiple inputs, add a name attribute to each element and let
//the handler function choose what to do based on the value of
// event.target.name

class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            //syntax to update the state key corresponding to the given 
            //inpur name
            [name]: value
        });
    }

    render(){
        return(
            <form>
                <label>
                    Is going: 
                    <input name="isGoing" 
                    type="checkbox" 
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} 
                    />
                </label>
                <br />
                <label>
                    Number of guests: 
                    <input 
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange = {this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(<Reservation/>, document.getElementById('root'))
