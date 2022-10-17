//Conditional rendering

//In react you can create distinct components that encapsulate behavior you need.
//Then, you can render only some of them, depending on the state of your application

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

//Greating component that displays either of these components depending on whether
//a user is logged in

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting/>;
}

//const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
//This renders a different greeting depending on the value of isLoggedIn prop
//root.render(<Greeting isLoggedIn={true} />);


//Element variables are used to store elements, helping us conditionally render a part of the component
//while the rest of the output doesnt change

//Components representing Logout and Login buttons
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

//Creating a stateful component called LoginControl
// It will render either <LoginButton /> or <LogoutButton /> depending 
// on its current state. It will also render a <Greeting /> from the 
// previous example:

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render(){
    //get isLoggedIn state from constructor state
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    //if logged in, show on dom logout button
    if (isLoggedIn) {      
      button = <LogoutButton onClick={this.handleLogoutClick} />;    
    } 
    //if logged out, show on dom log in buttton
    else 
    {     
       button = <LoginButton onClick={this.handleLoginClick} />;    
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />  
        {/* button that renders onto the dom depending on the conditions in 
        the render method       */}
        {button}      
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);
