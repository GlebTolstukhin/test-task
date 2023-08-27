import './App.css';
import CommitsTable from './Components/CommitsTable';
import DaysColumn from './Components/DaysColunm';
import SupportInfo from './Components/SupportInfo';

function App() {

  
  return (
    <div className="App">
      <div className='tableFlex'>
        <DaysColumn/>
        <CommitsTable/>
      </div>
      <SupportInfo />
    </div>
  );
}

export default App;
