export const Getgifs = async(category) => {
    

    const resp = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=A3qxK1O1X6ljTeuUwDwBY2rdzqr3AJ4N&q=${category}&limit=12`);
    const {data} = await resp.json()
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
       

    }));
 
    return gifs;
}






