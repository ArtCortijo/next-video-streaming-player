'use client';

import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoJsPlayer = () => {
	const videoRef = useRef<any>(null);

	useEffect(() => {
		const videoElement = document.createElement('video-js');
		if (videoRef.current) {
			videoRef.current.appendChild(videoElement);
			videojs(videoElement, {
				controls: true,
				autoplay: false,
				width: 1024,
				sources: [
					{
						// Adaptive bitrate streaming
						src: 'https://ik.imagekit.io/2tjs4zugh/test.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080',
						type: 'application/x-mpegURL',
					},
				],
			});
		}
	}, []);

	return (
		<div data-vjs-player>
			<div ref={videoRef} />
		</div>
	);
};

export default VideoJsPlayer;
