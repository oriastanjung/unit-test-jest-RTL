import logo from './logo.svg';
import './App.css';
import SampleComponent from './materi-testing/SampleComponent';
import SimpleShowHide from './materi-testing/SimpleShowHide';
import ComponentVariant from './materi-testing/ComponentVariant';
import ComponentUserEvent from './materi-testing/ComponentUserEvent';
import ComponentAxiosCall from './materi-testing/ComponentAxiosCall';

function App() {
  return (
    <div className="App">
      <SampleComponent/>
      <SimpleShowHide />
      <div>
        <label > email</label>
        <input onChange={(e) => console.log(e.target.value)} value={"oriastan999@gmail.com"} type="text" name="" id="" placeholder='masukkan Email' />
      </div>
      <img src="" alt="test-img" />
      <a data-testid="axvb">uwoooww</a>
      <ComponentVariant />
      <ComponentUserEvent />
      <ComponentAxiosCall />
    </div>
  );
}

export default App;
