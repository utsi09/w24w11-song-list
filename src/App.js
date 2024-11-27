import './App.css';
import Container from './Container.js'; // Container.js에서 import한 Container를 사용

const App = () => {
  const songs = [
    "빡",
    "사건의 지평선",
    "사랑은 늘 도망가",
  ];

  return (
    <div>
      <Header />
      <Playlist
        title="프로그래밍하면서 듣고 싶은 노래"
        listSong={songs}
      />
    </div>
  );
};

const Header = () => {
  return <h1>React 프로그래밍</h1>;
};

const Playlist = (props) => { // props 매개변수 추가    
  return (
    <div className='playlist'>
      <div>{props.title}</div>
      {props.listSong.map((song, index) => (
        <Container key={index} title={song} index={index} />
      ))}
    </div>
  );
};

export default App;
