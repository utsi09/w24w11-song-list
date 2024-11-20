import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container/>
    </div>
  )
}

function Header() {
  return (
      <h1>React 프로그래밍</h1>
  )
}

function Playlist() {
  return (
    <div className="playlist">
      프로그래밍하면서 듣고 싶은 노래
    </div>
  )
}

function Container() {
  return (
    <div className="container">
      <a
        href="https://www.youtube.com/results?search_query=빡">
        <img src="https://picsum.photos/600/150?random=2" alt="랜덤이미지 2"/>
      <div className="song-title">
       빡
      </div>
      </a>
    </div>
  )
}

export default App
