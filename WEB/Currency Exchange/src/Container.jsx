function Container({st,state,va,vachange,wordc=['inr','usd'],sw}){


  
    return(<>
        <div className="viewcotainer w-[500px] h-[100px] bg-blue-400 opacity-500 flex rounded-2xl">
            <div className="w-[50%] h-[100%] flex flex-col justify-evenly pl-[20px]">
                <label htmlFor="currency">{state}</label>
                <input 
                className=' outline-nonew-[200px] h-8 rounded-md' 
                type="number" 
                id='currency' 
                value={va} 
                onChange={(e)=>vachange(Number(e.target.value))}
                />
            </div>
            <div className="w-[50%] h-[100%] flex flex-col items-end justify-evenly pr-[20px]">
                <h2>Currency Type</h2>
                <select value={st} onChange={(e)=>sw(e.target.value)}>
                    
                    {wordc.map((con)=>{
                        return <option key={con} value={con}>{con}</option>
                    })}
                    
                </select>

            </div>
        </div>
        </>)
}

export default Container;