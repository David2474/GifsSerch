const apiKey = "sn7NlYVtURaOTMgtmp9i6j1mwiLhUD0k"
const apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=sn7NlYVtURaOTMgtmp9i6j1mwiLhUD0k&q=cristiano&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function getGifs({ keyword = "cristiano" } = {}) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=sn7NlYVtURaOTMgtmp9i6j1mwiLhUD0k&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      console.log(response)
      const gifs = data.map(image => {
        const {images, title, id} =  image
        const {url} = images.fixed_width_downsampled
        return {url, title, id}
      })
      console.log(gifs)
      return gifs
    })
}

export default getGifs;