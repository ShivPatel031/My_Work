function ICComponent({pass,refrance,copypassword}){
    return(
        <div className="inputcontaier h-10 w-[500px] flex justify-center items-center mb-3">
            <input type='text' value={pass} readOnly className='w-[400px] h-9 rounded-tl-md rounded-bl-md text-center text-xl' ref={refrance}/>
            <button className="outline-none w-[100px] h-9 bg-yellow-400 rounded-tr-md rounded-br-md" onClick={copypassword}>Copy</button>
        </div>
    );
}

export default ICComponent;