export interface TopAnime{
    mal_id: string,
    title: string
    images:Images
}

interface Images {
    webp:ImageUrl
}

interface ImageUrl {
    image_url: string
}
export interface ApiResponse<T> {
    data: {
        data:T
    }
  }