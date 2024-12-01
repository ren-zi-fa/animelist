import axios from 'axios'
import React from 'react'

const Detail = async ({ params }: { params: Promise<{ anime: string }> }) => {
    const anime = (await params).anime
   const response = await axios.get(`https://api.jikan.moe/v4/anime/${anime}/full`)
   const data = JSON.stringify(response.data, null, 2)
   
	return <div>Detail:{data}</div>
}

export default Detail
