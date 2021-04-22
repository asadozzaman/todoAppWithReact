import React,{useEffect,useState} from 'react'
import Axios from 'axios'


const App = ()=>{
    const [todo,setTodo] = useState(null)
    const [datat,setData] = useState('')
    const [reload,setReload] = useState(null)
    const [edit, setedit] = useState(false)
    const [eidtid, seteidtid] = useState(null)
    useEffect(()=>{
        const gettodo = async()=>{
            await Axios({
                method: "GET",
                url: "http://localhost:8000/"
            }).then(response=>{
                console.log(response.data)
                setTodo(response.data)
            })
        }
        gettodo()
    },[reload])
    const adddatatodo = async()=>{
        await Axios({
            method: "POST",
            url: "http://localhost:8000/",
            data:{
                'text':datat
            }
        }).then(response=>{
            console.log(response.data)
            setReload(response.data)
            setData('')
        })
    }
    const deleteTodo = async(id)=>{
        await Axios({
            method: "DELETE",
            url: `http://localhost:8000/${id}/`
        }).then(response=>{
            console.log(response.data)
            setReload(response)
        })
    }
    const editTodo = async(id)=>{
        seteidtid(id)
        await Axios({
            method: "GET",
            url: `http://localhost:8000/${id}/`
        }).then(response=>{
            setData(response.data["text"])
            console.log(response.data)
            setedit(true)
        })
    }
    const updateatatodo =async()=>{
        await Axios({
            method: "PUT",
            url: `http://localhost:8000/${eidtid}/`,
            data:{
                'text': datat
            }
        }).then(response=>{
            console.log(response.data)
            setReload(response.data)
            setData('')
            setedit(false)
        })
    }
    return(
        <div>
            <div>
                <input onChange={(e)=>setData(e.target.value)} value={datat} type="text"/>
                {
                    edit ? <button onClick={updateatatodo}>Update</button>:
                    <button onClick={adddatatodo}>Add</button>
                }
                
            </div>
           {
                todo !== null ? ( 
                    <div>
                        {
                            todo.map((d,i)=>(
                                <div key={i}>
                                    <h1>{d.id} |{d.text} | {d.date}  <button onClick={()=>editTodo(d.id)}>Edit</button> | <button onClick={()=>deleteTodo(d.id)} >Delete</button> </h1>
                                </div>
                            ))
                        }
                    </div>
                 ) : ( <h1>No data</h1> )
           }
        </div>
    )
}

export default App