import './styles/styles.css';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
