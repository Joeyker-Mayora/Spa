import { useState, useEffect } from "react"
import { Getgifs } from "../Helpers/GetGifs/Getgifs";
 
const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)
  
  const getImages = async()=> {
    const newImages = await Getgifs(category);
    setImages(newImages);
    setLoading(false)
  }
  
  useEffect(()=> { 
    getImages()
  }, [])

  return {
    images,
    loading
  }
}

export default useFetchGifs