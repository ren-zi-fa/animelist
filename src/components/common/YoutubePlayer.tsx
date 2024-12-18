'use client'

import YouTube, { YouTubeProps } from 'react-youtube'
import React from 'react'

interface PropsYoutube {
	videoId: string
	height?: string
	width?: string
}

export const YoutubePlayer: React.FC<PropsYoutube> = ({
	videoId,
	height = '100',
	width = '200'
}) => {
	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		event.target.pauseVideo()
	}

	const opts: YouTubeProps['opts'] = {
		height,
		width,

		playerVars: {
			autoplay: 1,
			allow:
				'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
			allowFullScreen: true
		}
	}

	return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
}
