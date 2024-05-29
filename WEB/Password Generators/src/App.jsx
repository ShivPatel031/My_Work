import { useState , useCallback , useEffect ,useRef} from 'react';
import Controller from './Controller.jsx';
import ICComponent from './ICComponent.jsx';


function App() {

  let [password,setPassword]=useState('');
  let [number,setNumber]=useState(false);
  let [symbol,setSymbol]=useState(false);
  let [length,setLength]=useState(8);

  let changelength=(e)=>{
    setLength(e.target.value);
  }


  let passwordref = useRef(null)

  function copypassword(){

    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  let genratepassword=useCallback(()=>{
    let pass='';
    let string='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(number) string+='0123456789';
    if(symbol) string+='@#$%&*+-/;';

    for (let i = 0;i<length;i++){

      let index = Math.floor(Math.random()*string.length)
      pass+=string[index];
    }

    setPassword(pass);
  });
  
  useEffect(()=>{
    genratepassword();
  },[length,number,symbol,setPassword])

  return (
    <>
      <div className="w-screen h-screen bg-slate-800 flex justify-center">
        <div className="maincotainer w-[600px] h-44 bg-blue-500 mt-24 rounded-3xl flex flex-col justify-center items-center">
          <ICComponent pass={password} refrance={passwordref} copypassword={copypassword}/>
          <Controller number={number} symbol={symbol} length={length} cl={changelength} sn={setNumber} ss={setSymbol}/>
        </div>
      </div>
    </>
  )
}

export default App
