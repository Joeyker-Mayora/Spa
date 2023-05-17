import { useEffect, useState } from "react"
 
    

const User = () => {

    const [users, setUsers] = useState([])
    const getUsers = fetch("https://jsonplaceholder.typicode.com/users/")

     useEffect (()=> {
        getUsers
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setUsers(res)
            
        })

     }, [])



  return (
   <div className="" >
    <div className="create ">
        <button>Crear Usuario</button>
     </div>
   {users.map((item)=> (
    <div className="users" key={item.id}>
        <div className="cont">
            
            <div className="name">
            {item.name}
            </div>
            
            <div className=" py-3">
                <p>Compañia :</p>
                <h1>
        
                    {item.company.name}
                </h1>
                <p>Telefono :</p>
                <h1>
                    {item.phone}
                    <button className="button hover:text-white hover:bg-blue-500">Llamar</button>
                   
                </h1>
            </div>
            <div className="">
                <button className="button hover:text-white hover:bg-green-500">Modificar</button>
                <button className=" button hover:text-white hover:bg-red-500">Eliminar</button>
                
            </div>
        </div>
    </div>

    ))}
   </div>
  )
}

export default User