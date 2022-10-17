//Preventing a component from rendering by returning null instead
//of its render output

function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  return (
    <div className = "warning">
      Warining!
    </div>
  );
}

class Page extends React.Component{
  constructor(props){
    super(props);
    //sets the state of showWarning
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  //method to handle the click on button
  handleToggleClick(){
    //setting the state to toggle when button is clicked
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  //render method
  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} />        
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Page />);
