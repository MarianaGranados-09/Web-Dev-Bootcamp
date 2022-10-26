//HTML form elements

//Controlled components such as <input>, <textarea> and <select>
//maintain their own state and update it based on user input.
//In react, mutable state is typically kept in the state properly
//of components, and only updated with setState()

class NameForm extends React.Component{
    constructor(props){
    this.state = {value: ''};

    this.handleChange  = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleChange method
    handleChange(event){
        //since the value attribute is set on our form element, the displayed
        //value will always be this.state.value, making the React state the source of truth
        //Since handle change runs on every keystroke to update the react state, the
        //displayed value will update as the user types.
        this.setState({value: event.target.value});
    }
    //handleSubmit method
    handleSubmit(event){
        alert('A name was submitted: '+ this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

