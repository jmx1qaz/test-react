import { usePetFetcher } from './hooks'
import './App.css';

function App() {
  const dataList = usePetFetcher()

  const petRender = () => {
    return Object.keys(dataList).map(key => {
      return <section key={key}>
        <h2>{ key }</h2>
        <ul>
          { dataList[key].map((name, idx) => <li key={name + idx}>{ name }</li>) }
        </ul>
      </section>  
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        { petRender() }
      </header>
    </div>
  );
}

export default App;
