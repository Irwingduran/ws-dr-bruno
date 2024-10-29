import React from 'react';

const VideoComponent = () => {
  return (
    <div className="relative pt-[56.25%]">
      <iframe 
        src="https://player.vimeo.com/video/1022257625?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="BRLV"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default VideoComponent;
