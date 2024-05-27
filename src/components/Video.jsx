import React, { useEffect } from "react";

function VideoPlayer() {
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("player", {
        videoId: "VWavstJydZU",
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          autoplay: 1,
          loop: 0,
          enablejsapi: 1,
          widget_referrer: window.location.href,
          disablekb: 1,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    };
  }, []);

  function onPlayerReady(event) {
    event.target.setPlaybackQuality("hd1080");
  }

  return <div id="player"></div>;
}
export default VideoPlayer;
