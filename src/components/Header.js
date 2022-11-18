
import React,{useState} from 'react'
import './Style.css';

export default function Header() {
    const [tog,setTog] = useState(true);
    const menuBtn = document.querySelector(".menuBtn")
    
    const toggleHandle = ()=>{
      const dropDown = document.querySelector(".secondary")
      if(tog){
        setTog(false);
        dropDown.style.height = "100vh";
        menuBtn.style.backgroundColor = "red";
      }else{
        setTog(true);
        dropDown.style.height = "0";
      }
    }
  return (
    <div>
         <header>
          <nav>
            <div className="navigation">
              <ul className="adventor">
                <li>Adventor.</li>
              </ul>
              <div className={tog ? "menuBtn" : "change"} onClick={toggleHandle}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
              </div>
              <ul className='secondary'>
                <li><a href="#">Adventures</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li className="explore"><a href="#">Explore</a></li>
              </ul>
            </div>
            <div className="content">
              <h3>Discover</h3>
              <h1>the adventure travel </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam, 
                necessitatibus vitae nam minima nesciunt facere quaerat, aut amet beatae quibusdam. 
                Similique nemo debitis sit laboriosam, numquam consectetur molestiae dolores et voluptatum officia, 
              </p>
              <button>view adventures</button>
            </div>
          </nav>
      </header>
    </div>
  )
}
