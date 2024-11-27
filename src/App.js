import './App.css';
import Container from './Container.js'; // Container.js에서 import한 Container를 사용

const App = () => {
  const songs = [
    {
      id: 1,
      title: "빡",
      singer: "저스디스",
      rating:1,
      lyrics:`Ayy, okay 난 현실에 낙서하고 다니는 문제아
      내 멋대로 그린 세상 알잖아 I cook it right
      스튜디오 안은 부귀영화의 냄새로만 가득해
      내 품을 떠난 일은 관심 끊어, 끊어 다음 티켓`,
    },
    {
      id: 2,
      title: "퍼즐",
      singer: "토일",
      rating:2,
      lyrics:null,
    },
    {
      id: 3,
      title: "셔터",
      singer: "유우리",
      rating:3,
      lyrics:null,
    },
  ]

  return (
    <div>
      <Header/>
      <Playlist
        title="프로그래밍하면서 듣고 싶은 노래"
        listSong={songs}/>
    </div>
  );
};

const Header = () => {
  return <h1>React 프로그래밍</h1>;
};

const Playlist = props => {
  return (
    <div className='playlist'>
      <div className="playlist">{props.title}</div>
      {
        props.listSong.map(song => 
          <Container key={song.id} song={song}/>
        )
      }
    </div>
  )
}

export default App;
