import React,{useState,useEffect} from 'react'

function Todo() {
    const [input, setinput] = useState("");

    const FetchMyData = () =>{
        const getItem = localStorage.getItem("storeMydata")


        if (getItem){
            return JSON.parse(getItem);
        }
    }

    const [items, setitems] = useState(FetchMyData);

    const [Edited, setEdited] = useState("");
    const [toggleBtn, settoggleBtn] = useState(false)



    const Additems = () =>{
        if(!input){
            alert("Need to enter item")
        }else if(input && toggleBtn){
            setitems(items.map((val)=>{
                if(val.id === Edited ){
                    return{...val,name:input}
                }
                return val;
            }))

            setinput("");
        setEdited(null);
        settoggleBtn(false);


        }
        else{
            const newDate = {
                id:new Date().getTime().toString(),
                name:input
            };
            setitems([...items,newDate])
           setinput("");

        }
    }

    const onDelte = (id) => {
        const DDelete =  items.filter((val)=>{
            return val.id !== id;

        })
        setitems(DDelete);
    };


    const removeData = () =>{
        setitems([]);

    }


    const onEdit = (id) =>{
        const EditedList =  items.find((val)=>{
            return val.id  === id ;
        })
        setinput(EditedList.name);
        setEdited(id);
        settoggleBtn(true);

    }
    

    useEffect(() => {
        localStorage.setItem("storeMydata", JSON.stringify(items))

     
    }, [items])


  return (
    <div>
        ADD items


        <input value={input} onChange={(e)=>{setinput(e.target.value)}}  type="text" placeholder=" 🤓 Enter item"/>

        {toggleBtn ? ( <button onClick={Additems} value="ADD">Edit </button>): <button onClick={Additems} value="ADD">Add </button> }
       
      


        <div>
          

            {items.map((val)=>{
                return(
                    <div key={val.id}><p> {val.name}</p> <button onClick={()=> onDelte(val.id)}>delete</button> <button  onClick={()=> onEdit(val.id)}>Edit</button></div>
                )

            })}

            <button onClick={removeData}>Remove all</button>
           
         

        </div>
    </div>
  )
}

export default Todo