

function Input({addme,todo,track}){

    
    return(
        <>
         <div className='inputcontainer'>
            <input placeholder="Enter DATA" value={todo} onChange={track}/>
            <button onClick={addme} className='inputbutton'>ADD ME</button>
        </div>
        </>
    );
}

export default Input;