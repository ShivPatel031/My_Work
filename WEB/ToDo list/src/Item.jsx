function Item({item,deleteme,updateme}){

    return(
        <>
        <div key={item.key} className='itemcontainer'>
            <p>{item.content}</p>
            <button onClick={()=>deleteme(item.key)} className='changebutton'>Delete</button>
            <button onClick={()=>updateme(item.key)} className='changebutton'>Update</button>
        </div>
        </>
    );

}

export default Item;