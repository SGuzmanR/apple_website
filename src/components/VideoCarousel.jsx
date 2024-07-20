import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  
  const [loadedData, setLoadedData] = useState([]);

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1.5,
      ease: 'power2',
    });

    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo((prevVideo) => ({
          ...prevVideo,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[videoId]) {
      let animation = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animation.progress() * 100);

          if(progress != currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width: 
                window.innerWidth < 700
                  ? '10vw'
                  : window.innerWidth < 1200
                  ? '10vw'
                  : '4vw',
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white',
            });
          }
        },

        onComplete: () => {
          if(isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px',
            });
            gsap.to(span[videoId], {
              backgroundColor: '#afafaf',
            });
          }
        },
      });

      if(videoId == 0) {
        animation.restart();
      }

      const animUpdate = () => {
        animation.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if(loadedData.length > 3) {
      if(!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, index) => {
    switch (type) {
      case 'video-end':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isEnd: true,
          videoId: index + 1
        }));
        break;

      case 'video-last':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVideo: true,
        }));
        break;

      case 'video-reset':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isLastVideo: false,
          videoId: 0
        }));
        break;

      case 'play':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPlaying: !prevVideo.isPlaying
        }));
        break;

      case 'pause':
        setVideo((prevVideo) => ({
          ...prevVideo,
          isPlaying: !prevVideo.isPlaying
        }));
        break;
    
      default:
        return video;
    }
  };

  const handleLoadedMetadata = (index, event) => setLoadedData((prevVideo) => [...prevVideo, event]);
  
  // const handleChangeVideo = (index) => {
  //   if (videoRef.current[videoId]) {
  //     videoRef.current[videoId].pause();
  //     videoRef.current[videoId].currentTime = 0;
  //   }

  //   setVideo((prevVideo) => ({
  //     ...prevVideo,
  //     isEnd: false,
  //     isLastVideo: false,
  //     videoId: index,
  //     startPlay: true,
  //     isPlaying: true,
  //   }));
  // };

  return (
    <>
      <div className="flex items-center mt-10">
        {hightlightsSlides.map((list, i) => (
          <div
            key={list.id}
            id="slider"
            className="sm:pr-20 pr-10"
            onClick={
              isLastVideo
                ? () => handleProcess('video-reset')
                : !isPlaying
                  ? () => handleProcess('play')
                  : () => handleProcess('pause')
            } 
          >
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center flex rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className="pointer-events-none flex"
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, index) => (
                  <p key={index} className="max-sm:text-lg md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span 
              key={i} 
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              // onClick={() => handleChangeVideo(i)}
            > 
              <span 
                className="absolute h-full w-full rounded-full" 
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

        <button className="control-btn" onClick={
              isLastVideo 
                ? () => handleProcess('video-reset')
                : !isPlaying
                ? () => handleProcess('play')
                : () => handleProcess('pause') 
            } >
          <img 
            src={ isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg }
            alt={ isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause' }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;