import anime from "animejs";
import { useEffect } from "react";

function SpotifyEmbed() {
  useEffect(() => {
    anime({
      targets: "iframe",
      opacity: [0, 1],
      translateY: [90, 0],
      duration: 2000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <iframe
      src="https://open.spotify.com/embed/artist/3wcj11K77LjEY1PkEazffa?utm_source=generator&theme=0"
      width="100%"
      height="252"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default SpotifyEmbed;
