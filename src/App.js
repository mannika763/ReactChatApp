
import './App.css';
import Chat from './Components/Chat';
import Detail from './Components/Detail';
import List from './Components/List';
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';

function App() {
const user=false;

  return (
    <div className="container">
      {
        user?(
          <>
          <List/>
          <Chat/>
          <Detail/>
          </>
        ):(<Login/>)
      }
    <Notification/>
    </div>
  );
}

export default App;
