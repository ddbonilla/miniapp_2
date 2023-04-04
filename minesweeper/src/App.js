
import Board from './Components/Board';
import './App.css';


function App() {
  
  // const [ board, setBoard ] = useState([])

  // useEffect(() => {

  //   const rows = new Array(10).fill(10).map(() => 
  //     new Array(10).fill("bank")
  //   )

  //   setBoard(rows)

  // },[])

  // console.log(board);

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
