import logo from "./logo.svg";
import "./App.css";
import UserList from "./component/UserList";

function App() {
  return (
    <div className="App">
      <video id="bgvid" autoPlay loop muted src="/vedio/bgvedio.mp4" />
      <UserList />
    </div>
  );
}

export default App;
