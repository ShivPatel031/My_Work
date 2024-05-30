import { useState } from 'react'
import MainComponent from './MainComponent'
import './APIDATA'
import currencyinput from './APIDATA';



function App() {
  const [fromamount, setFromamount] = useState(0);
  const [from,setFrom]=useState('inr');
  const [to,setTo]=useState('usd');
  const [toamount,setToamount]=useState(0);

  let data=currencyinput(from);  

  let wordc=Object.keys(data);


  let changefromamount = (val)=>{
    setFromamount(val);
  }

  let changetoamount = (val)=>{
    setToamount(val);
  }

  let calculatecureency=async()=>{

      if(data) setToamount(fromamount*data[to]);
  }

  return (
   <>
    <div className='w-full h-screen bg-cover bg-no-repeat flex justify-center items-center' style={{backgroundImage:`url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
      <MainComponent from={from} to={to} fa={fromamount} ta={toamount}
        setfa={changefromamount} setta={changetoamount} cb={calculatecureency}
        wordc={wordc}
        sf={setFrom} st={setTo}
      />
    </div>
   </> 
  )
}

export default App
