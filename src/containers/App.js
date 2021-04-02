import styles from './App.module.css';
import Intervals from './Intervals'
import intervals from '../utils/IntervalsList'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <p>
          Motobike control APP
        </p>
      </header>
      <Intervals intervals={intervals}/>
    </div>
  );
}

export default App;
