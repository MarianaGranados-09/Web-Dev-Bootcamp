//React.Component subclasses

//Here, ShoppingList is a React component class which takes in parameters called 
//props (properties) and return a hierarchy of views to display via the render method


//The render method returns a description of what is shown on screen
//render returns a react element
//The <div /> syntax is transformed at build time to React.createElement('div')


// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render( <ShoppingList name="Mark" />, document.getElementById("root"))

//3 COMPONENTS: SQUARE, BOARD, GAME

//The Square component renders a single <button>
//The Board renders 9 squares
//The Game component renders a board with placeholder values

//class Square extends React.Component {
    // constructor(props){
    //     super(props); //we need to call super when defining the constructor of a subclass
    //     this.state = {
    //         value: null,
    //     };
    // }
    //when the button is click, set the state value to X

    //when Square is clicked, the onClick function provided by the Board is called.
    // render() {
    //   return (
    //     <button 
    //     className="square" 
    //     onClick={() => this.props.onClick()}
    //     >
    //       {this.props.onClick()}
    //     </button>
    //   );
    // }
  //}
  //Replacing Square class with this function:
  function Square(props) {
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
  }
  
  class Board extends React.Component {
    //set initial state to contain an array of 9 nulls
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null), //squares array
            xIsNext: true, //each time a player moves, xIsNext will be flipped to determine which player goes next
        };
    }
    handleClick(i){
        const squares = this.state.squares.slice(); //slice to create a copy of the squares array to modify instead of modifying the existing array
        if (calculateWinner(squares) || squares[i]) 
        {      
            return;    
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    //renderSquare method to read from squares array
    renderSquare(i) {
      //return <Square />;
      return (
      <Square 
      value = {this.state.squares[i]} 
      onClick = {() => this.handleClick(i)}
      />
      );
    } //we pass down two props from Board to Square: value and onClick
    //onClick prop is a function that Square can call when clicked
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = 'Winner '+winner;
      }
      else{
        status = 'Next player '+ (this.state.xIsNext ? 'X' : 'O');
      }
      //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);


  //1. passing data through properties
  //Board component to our Square component by changing 
  //the code to pass a prop called value to the Square

  //Passing props is how information flows in React apps,
  // from parents to children

  //Making an Interactive component
  //Changing the button tag that is returned from the Square component's
  //render() function

  //Square component need to remember that it got clicked, and fill it with an X mark, hence we use state. By setting this.state in their constructors 

  //Completing the game
  //Each square component maintains the game's state, to check for a winner, we'll maintain the value of each of the 9 squares in one location. Store the game's state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, just like when we passed a number to each Square. 


//To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. 
//The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

//Add a constructor to the Board component and set the Board's initial state to contain an array of 9 nulls corresponding to the 9 squares

//Using the prop passing mechanism to modify the Board to instruct each
//individual Square about its current value (X, O or null)

//Each square will now receive a value prop that will be either
//X,O or null in case of empty squares

//Next, we change what happens when a Square is clicked, the board component now maintains which squares are filled. State is private so we can't update the Boards state from Square component

//Instead we pass a function from the Board to the Square, and we’ll have Square call that function when a square is clicked

//Function components are simpler way to write components that only contain a render method and dont have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. 

//Declaring a Winner with function calculateWinner(squares)
//Giving an array of 9 squares, this function will check for a winner and return 'X', 'O', or null as appropriate.
