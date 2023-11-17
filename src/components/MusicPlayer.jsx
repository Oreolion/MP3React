import { GrPlayFill as PlayBtn } from "react-icons/gr";
import { TbPlayerPauseFilled } from "react-icons/tb";
import {
  FaBackwardFast as BackBtn,
  FaForwardFast as ForwardBtn,
} from "react-icons/fa6";
import { useState } from "react";
import { MdLibraryMusic } from "react-icons/md";
import "animate.css";
import anime from "animejs";
import { useEffect } from "react";

const MusicPlayer = () => {
  const [songs] = useState([
    "Seyi-Vibez-Bullion-Van",
    "Wizkid-Bad-To-Me",
    "Reekado-Banks-Jeun-To-Da-JTD",
    "Reminisce-Ft.-Mayorkun-–-Eyes",
    "Asake--Joha",
    "Reminisce-Ft.-Buju-D-Smoke-Hustle",
    "Buju-Never-Stopped","Flavour-Levels",
    "Reekado-Banks-Lupita-Nyongo", "Omah-Lay-Free-My-Mind",
    "Timaya-Ft.-Buju-Cold-Outside"
  ]);
  let [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    anime({
      targets: ".music-container",
      opacity: [0, 1],
      translateY: [90, 0],
      duration: 2000,
      easing: "easeInOutQuad",
    });
  }, []);
  const audioElement = document.querySelector("#audio");
  const progressContainer = document.querySelector(".progress-container");

  //initially load songs

  loadSongs(songs[songIndex]);

  //update song details

  function loadSongs(song) {
    const audioElement = document.getElementByID("audio");
    const imageElement = document.getElementByID("cover");
    audioElement.src = `/src/assets/music/${song}.mp3`;
    imageElement.src = `/src/assets/images/${song}.jpg`;
  }

  function playOrPauseSong() {
    const musicContainer = document.querySelector(".music-container");
    const audioElement = document.querySelector("#audio");

    if (!isPlaying) {
      audioElement.play();
      musicContainer.classList.add("play");
      setIsPlaying(true);
      return;
    } else {
      audioElement.pause();
      musicContainer.classList.remove("play");
      setIsPlaying(false);
      return;
    }
  }

  function prevSong() {
    setSongIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = songs.length - 1;
      }
      loadSongs(songs[newIndex]);
      playOrPauseSong();
      return newIndex;
    });
  }

  function nextSong() {
    setSongIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= songs.length) {
        newIndex = 0;
      }
      loadSongs(songs[newIndex]);
      playOrPauseSong();
      return newIndex;
    });
  }

  function updateProgress(e) {
    const progress = document.querySelector(".progress");

    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  function setProgress(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioElement.duration;
    const newTime = (clickX / width) * duration;
    audioElement.currentTime = newTime;
  }

  return (
    <>
      <section className="music-container">
        <div className="music-info">
          <h4
            className="animate__animated animate__slideInRight animate__infinite"
            id="title"
          >
            <MdLibraryMusic style={{ color: "white", marginRight: 5 }} />
            {songs[songIndex]}
          </h4>
          <div className="progress-container" onClick={(e) => setProgress(e)}>
            <div className="progress"></div>
          </div>
        </div>

        <audio
          src={`/src/assets/music/${songs[songIndex]}.mp3`}
          id="audio"
          onTimeUpdate={updateProgress}
        ></audio>
        <div className="img-container">
          <img
            src={`/src/assets/images/${songs[songIndex]}.jpg`}
            alt="music-cover"
            id="cover"
          />
        </div>

        <div className="navigation">
          <button
            type="button"
            className="action-btn"
            id="prev"
            onClick={prevSong}
          >
            <BackBtn className="back-btn" />
          </button>
          <button
            type="button"
            className="action-btn action-btn-big"
            id="play"
            onClick={playOrPauseSong}
          >
            {!isPlaying ? (
              <PlayBtn className="play-btn" />
            ) : (
              <TbPlayerPauseFilled className="pause-btn" />
            )}
          </button>
          <button
            type="button"
            className="action-btn"
            id="next"
            onClick={nextSong}
          >
            <ForwardBtn className="next-btn" />
          </button>
        </div>
      </section>
    </>
  );
};

export default MusicPlayer;
