import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { plus } from './Features/Counter';
import { minus } from './Features/Counter';
import { reset } from './Features/Counter';

function App() {

  const num = useSelector(state => state.counter)
  const dispatch = useDispatch()

  function handlePlus () {
    dispatch(plus())
  }
  function handleMinus () {
    dispatch(minus())
  }
  function handleReset () {
    dispatch(reset())
  }
  return (
    <>
    <div className="num">
      {num}
    </div>
    <button onClick={handlePlus}>+</button>
    <button onClick={handleMinus}>-</button>
    <button onClick={handleReset}>reset</button>
    </>
  );
}

export default App;
