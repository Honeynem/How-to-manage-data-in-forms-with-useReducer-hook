import { useReducer, useRef, useState } from "react";
import { formReducer, initialState } from './formReducer';

const Form = () => {
    //This is going to be defined in formReducer as initialState
    // const [product , setProduct] = useState({
    //     title : '',
    //     description : '' , 
    //     price : 0 ,
    //     category : '',
    //     tag : [],
    //     quantity : 0
    // })

    const tagRef = useRef()


    const[state , dispatch] = useReducer(formReducer , initialState)

    const handleInputChange = (event)=>{
        dispatch ({type : 'change-input' , data : {name : event.target.name , value: event.target.value}})
    } 
    console.log(state)

    const handleTags = ()=> {
        const tags = tagRef.current.value.split(',')
        tags.forEach(t => {
            dispatch({type : 'add-tag' , data : t})
        })

    }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleInputChange}
        />
        <p>Collecrion</p>
        <select name="category" onChange={handleInputChange}>
          <option value="bag">Bag</option>
          <option value="shoes">Shoes</option>
          <option value="dress">Clothing</option>
        </select>
        <p>Tag</p>
        <textarea placeholder="tags" ref={tagRef}></textarea>
        <br />
        <button type="button" onClick={handleTags}>Choose tag</button>
        <br/>
        {state.tags.map((tag) => {
          return <button key={tag} onClick={()=> dispatch({type :"remove_tag" , data : tag })}>
            {tag}</button>;
        })}
        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={() => dispatch({ type: "increase" })}>
            +
          </button>
           Quantity{state.quantity}
          <button type="button" onClick={() => dispatch({ type: "decrease" })}>
            -
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
