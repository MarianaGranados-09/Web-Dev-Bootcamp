//list and keys
//we use the map() function to take an array of numbers
//and double their values, we assign the new array returned by map()
//to the variable doubled and log it

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li key={number.toString()}>
      {number}
    </li>
  );
  return(
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1,2,3,4,5]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers ={numbers} />);

//a key is a special string attribute you need to include when creating
//lists of elements. Keys help react identify which items have changed
//are added, or are removed. Keys should be given to elements inside the 
//array to give elements a stable identity

//elements inside the map() call need keys
