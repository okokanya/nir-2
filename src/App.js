import './App.css';
import RingChart from './RingChart';

const dataForChart = [
  ['Long name oc category', 30, '#ff6384', '🍎'],
  ['Bananas', 20, '#ffcd56', '🍌'],
  ['Cherries', 15, '#4bc0c0', '🍒'],
  ['Grapes', 25, '#36a2eb', '🍇'],
  ['Oranges', 10, '#9966ff', '🍊'],
];

function App() {
  return (
    <div className="App">
        <RingChart data={dataForChart} />
    </div>
  );
}

export default App;
