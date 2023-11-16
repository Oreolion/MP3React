import MusicPlayer from "./components/MusicPlayer";
import {FcMusic} from "react-icons/fc";
import {MdLibraryMusic} from "react-icons/md";
import 'animate.css';
import SpotifyEmbed from "./components/SpotifyEmbed";



function App() {
  return (
    <>
      <h1 className="animate__animated animate__heartBeat animate__infinite"><FcMusic  />MUSIC PLAYER <MdLibraryMusic style={{color: "green"}}/></h1>
      <MusicPlayer />
      <SpotifyEmbed />
    </>
  );
}

export default App;
