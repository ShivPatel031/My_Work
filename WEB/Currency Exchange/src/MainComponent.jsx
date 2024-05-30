import Container from './Container';

function MainComponent({from,to,fa,ta,setfa,setta,cb,wordc,sf,st}){

    return(
        <>
        <div className="maincontainer w-[600px] h-[400px] bg-white bg-opacity-40 rounded-3xl flex flex-col justify-evenly items-center">
            <Container st={from} state='From' va={fa} vachange={setfa} wordc={wordc} sw={sf}/>
            <Container st={to} state='To'va={ta} vachange={setta} wordc={wordc} sw={st}/>
            <button className='bg-slate-300 w-[450px] h-[50px] rounded-xl text-blue-500 text-2xl font-[400]' onClick={cb}>Convert INR to USD</button>
        </div>
        </>
    )

}

export default MainComponent