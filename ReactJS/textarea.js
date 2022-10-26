//HTML form elements

//Controlled components such as <input>, <textarea> and <select>
//maintain their own state and update it based on user input.
//In react, mutable state is typically kept in the state properly
//of components, and only updated with setState()

class EssayForm extends React.Component{
    constructor(props){
        super(props);
        //this.state.value initialized in the constructor, so that the 
        //text area starts off with some text in it
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('An essay was submitted '+this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <br></br>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

ReactDOM.render(<EssayForm/>, document.getElementById('root'))
