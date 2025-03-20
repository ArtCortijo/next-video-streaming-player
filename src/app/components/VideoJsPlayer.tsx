'use client';

import { IKVideo } from 'imagekitio-next';

const VideoJsPlayer = () => {
	return (
		<div data-vjs-player>
			<IKVideo
				urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
				path='/test.mp4'
				controls
				transformation={[
					{
						width: 1024,
					},
				]}
			/>
		</div>
	);
};

export default VideoJsPlayer;
