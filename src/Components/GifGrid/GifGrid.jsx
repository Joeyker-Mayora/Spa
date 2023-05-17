import useFetchGifs from "../../Hooks/useFetchGifs";
import GifItem from "../gifItem/GifItem";

const GifGrid = ({category}) => {
  const {images} = useFetchGifs(category);
 
  return (

    <div>
       <h1 className="name">{category}</h1>
       <div className="grid grid-cols-3 max-w-[1240px] w-full h-full justify-center items-center mx-auto p-4 ">
       {
          images.map((image) => (
            <GifItem 
              key={image.id}
             {...image}
            />
          ))
        }
       </div>
    </div>
  )
}

export default GifGrid