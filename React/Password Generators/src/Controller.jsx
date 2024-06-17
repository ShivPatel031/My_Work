function Controller({number,symbol,length,cl,sn,ss}){
    return(
        <div className='Controller w-[500px] h-10  flex items-center justify-around '>
            <div>
                <input type='range' id='range' className="cursor-pointer" min={6} max={32} value={length} onChange={cl}/>
                <label htmlFor="range" >Length :{length} </label>
            </div>
            <div>
                <input type='checkbox' id='number' defaultChecked={number} onClick={()=>sn((number)=>!number)}/>
                <label htmlFor="number">Number</label>
            </div>
            <div>
                <input type='checkbox' id='SS' defaultChecked={symbol} onClick={()=>ss((symbol)=>!symbol)}/>
                <label htmlFor="SS">Symbol</label>
            </div>

        </div>
    );
}

export default Controller;