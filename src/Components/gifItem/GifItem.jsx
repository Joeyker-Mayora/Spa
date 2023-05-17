const GifItem = ({url, title, }) => {
  return (
    <div className=' py-3 px-3'>
      <div className='bg-white rounded-xl  ' >
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
        
    </div>
  )
}

export default GifItem