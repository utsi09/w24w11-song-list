import './App.css'

const App = () => {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container title="빡" index='1'/>
      <Container title="사건의 지평선" index='2'/>
      <Container title="사랑은 늘 도망가" index='3'/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>React 프로그래밍</h1>
  )
}
const Playlist = () => {
  return (
    <div className="playlist">
      프로그래밍하면서 듣고 싶은 노래
    </div>
  )
}

const Container = (props) => {
  return (
    <div className="container">
      <a href={`https://www.youtube.com/results?search_query=${props.title}`}>
        <img 
          src={`https://picsum.photos/600/150?random=${props.index}`} 
          alt={`랜덤 이미지 ${props.index}`}/>
        <div className="song-title">{props.title}</div>
      </a>
    </div>
  )
}

// function Container2() {
//   return (
//     <div className="container">
//       <a href="https://www.youtube.com/results?search_query=사건의 지평선">
//         <img 
//           src="https://picsum.photos/600/150?random=2" 
//           alt="랜덤 이미지 2"/>
//         <div className="song-title">{props.title}</div>
//       </a>
//     </div>
//   )
// }

// function Container3() {
//   return (
//     <div className="container">
//       <a href="https://www.youtube.com/results?search_query=사랑은 늘 도망가">
//         <img src="https://picsum.photos/600/150?random=3" alt="랜덤 이미지 3"/>
//         <div className="song-title">사랑은 늘 도망가</div>
//       </a>
//     </div>
//   )
// }


export default App
