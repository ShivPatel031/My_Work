import { useEffect, useState } from 'react'
import MainComponent from './MainComponent'
import currencyinput from './api/APIDATA';

function App() {

  //From side input Amount
  const [fromAmount, setFromAmount] = useState(100);
  //From side country selection
  const [from,setFrom]=useState('inr');

  //To side output amount
  const [toAmount,setToAmount]=useState(0);
  //To side country selection
  const [to,setTo]=useState('usd');
  
  //Get data form api
  let data=currencyinput(from);  

  let countryArray=Object.keys(data);

  //To track/change From side amount
  let changeFromAmount = (val)=>{
    setFromAmount(val);
  }

  //To track/change To side amount
  let changeToAmount = (val)=>{
      
    setToAmount(val);
  }

  //Calculate currency change
  let calculateCurrency=()=>{
      if(data) setToAmount((fromAmount*data[to]).toFixed(4));
  }

  useEffect(()=>{
    calculateCurrency();
  })

  //To Swap content
  let swapContent=()=>{
    let temp=fromAmount;
    setFromAmount(toAmount);
    setToAmount(temp);

    temp=from;
    setFrom(to);
    setTo(temp);
  }

  return (
   <>
    <div className='w-full h-screen bg-cover bg-no-repeat flex justify-center items-center' style={{backgroundImage:`url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
      <MainComponent 

        from={from} to={to}
        setFrom={setFrom} setTo={setTo}

        fromAmount={fromAmount} toAmount={toAmount}
        changeFromAmount={changeFromAmount} changeToAmount={changeToAmount} 

        calculateCurrency={calculateCurrency}
        countryArray={countryArray}
        swapContent={swapContent}
        
      />
    </div>
   </> 
  )
}

export default App
