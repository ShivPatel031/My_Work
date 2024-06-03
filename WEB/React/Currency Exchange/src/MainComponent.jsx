import Container from './Container';

function MainComponent({
            from,to,
            setFrom,setTo,

            fromAmount,toAmount,
            changeFromAmount,changeToAmount,

            calculateCurrency,countryArray,swapContent
            }){

    return(
        <>
        <div className="maincontainer w-[600px] h-[400px] bg-white bg-opacity-40 rounded-3xl flex flex-col justify-evenly items-center">
                <div className='flex flex-col items-center'>
                    <Container 
                        country={from} box='From' 
                        amount={fromAmount} amountChange={changeFromAmount} 
                        countryArray={countryArray} countryChange={setFrom}/>

                    <button className='w-[100px] h-[40px] bg-slate-300 rounded-xl text-xl text-blue-500'
                            onClick={swapContent}>
                                Swap
                    </button>

                    <Container 
                        country={to} box='To'
                        amount={toAmount} amountChange={changeToAmount} 
                        countryArray={countryArray} countryChange={setTo}/>
                </div>    

            <button className='bg-slate-300 w-[450px] h-[50px] rounded-xl text-blue-500 text-2xl font-[400]' 
                onClick={calculateCurrency}>
                    Convert INR to USD
            </button>
        </div>
        </>
    )

}

export default MainComponent