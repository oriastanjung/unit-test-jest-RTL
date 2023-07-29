import logo from './logo.svg';
import './App.css';
import SampleComponent from './materi-testing/SampleComponent';
import SimpleShowHide from './materi-testing/SimpleShowHide';

function App() {
  return (
    <div className="App">
      <SampleComponent/>
      <SimpleShowHide />
      <div>
        <label > email</label>
        <input onChange={console.log("oke")} value={"oriastan999@gmail.com"} type="text" name="" id="" placeholder='masukkan Email' />
      </div>
      <img src="" alt="test-img" />
      <a data-testid="axvb">uwoooww</a>
    </div>
  );
}

export default App;
