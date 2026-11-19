import { useState } from 'react';
import './App.css'
import Modal from './Modal';

function App() {
   const [title, settitle] = useState(['경기도','강원도','제주도',]);
   const [clickup, setClickup] = useState(0,0,0);
  const [modal, setModal] = useState(false);
  

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4 style={{color:'red', fontsize:'20px'}}>React Blog</h4>
        </div>

        {
          title.map((tit,i)=>
            <div className="list" key={i}>
            <h4 onClick={()=>{
            setModal(!modal);
          }}>{tit} <span onClick={(e) => {
            let copy = [...clickup];
            copy[i] = clickup[i] + 1;
            setClickup(copy);
            e.stopPropagation();
          }}>👍</span> {clickup[i]}</h4>
          <p>11월19일</p>

       <button onClick={()=>{
        let copy = [...title];
        copy[0]= '충청도';
          setTitle(copy);
        }}>제목변경</button>
      </div>
          ) 
        }

       <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
       }}>제목정렬</button>

       modal === true ? <Modal/>
  
    </div>
    </>
  )
}

export default App
