//HTML form elements

//Controlled components such as <input>, <textarea> and <select>
//maintain their own state and update it based on user input.
//In react, mutable state is typically kept in the state properly
//of components, and only updated with setState()

class FlavorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event){
        alert('Your favorite flavor is: '+ this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Pick your favorite flavor: --
                    <select value={this.state.value} onChange={this.handleChange}>
                        {/* //value attribute used to implement a controlled component */}
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>


        );
    }
}
ReactDOM.render(<FlavorForm/>, document.getElementById('root'))
