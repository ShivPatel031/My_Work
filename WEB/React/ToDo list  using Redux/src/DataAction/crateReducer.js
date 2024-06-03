import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    data:[]
}




const todoSlice = createSlice({
    name:'todoData',
    initialState,
    reducers : {
        addInTodo : (state,action)=>{
            let val={id:nanoid(),value:action.payload,complete:false}
            state.data.push(val);
        },

        deleteInTodo : (state,action)=>{
            state.data = state.data.filter((element)=>element.id != action.payload)
        },
        
        updateInTodo :(state,action)=>{
               state.data.forEach(element => {
                    if(element.id == action.payload[0]){
                        element.value = action.payload[1]
                    }   
                    
            });
        }
    }
   });


export const {addInTodo,deleteInTodo,updateInTodo} = todoSlice.actions;

export default todoSlice.reducer
