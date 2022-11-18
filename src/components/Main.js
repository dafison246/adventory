import React, {useState,useEffect,useRef} from 'react'
import './Style.css';
import Boat from '../image/Rectangle 10.png'
import Sky from '../image/Rectangle 10-2.png'
import Canoe from '../image/Rectangle 10-3.png'
import Dive from '../image/Rectangle 10-4.png'
import Sket from '../image/Rectangle 10-5.png'
import Diver from '../image/Rectangle 10-6.png'
import Board from '../image/Rectangle 10-7.png'
import Ship from '../image/Rectangle 10-8.png'
import Star1 from '../image/Star 1.png'
import Star2 from '../image/Star 4.png'
import People from '../image/Rectangle 9.png';
import Circle from '../image/Ellipse 1.png';
import Footer from './Footer';
import { AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'



export default function Main() {
//    const ref1 = useRef(null) 
//    const ref2 = useRef(null)
//    const ref3 = useRef(null)
//    const ref4 = useRef(null)
//    const ref5 = useRef(null);
//    const ref6 = useRef(null);
//    const ref7= useRef(null);
//    const ref8 = useRef(null);

    // var id1 = 1;
    // var id2 = 2;
    // var id3 = 3;
    // var id4 = 4;
    // var id5 = 5;
    // var id6 = 6;
    // var id7 = 6;
    // var id8 = 6;
    // var {ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8} = useRef(null);
 
    // Read more and show less start here
   var btn = {
        id1: "more1",
        id2: "more2", 
        id3: "more3",
        id4: "more4",
        id5: "more5",
        id6: "more6",
        id7: "more7",
        id8: "more8"
    };
 
   var [buttons, setButtons] = useState([
        {name: "more1"},
        {name: "more2"},
        {name: "more3"},
        {name: "more4"},
        {name: "more5"},
        {name: "more6"},
        {name: "more7"},
        {name: "more8"},
    ]);

    const handle =(id)=>{
        buttons.map((list)=>{
            console.log("clicked")
            const {name} = list
            if(name === id){
                var change = document.getElementById(name);
                var showLess = document.querySelector("."+id);
                if(change.style.display === 'inline'){
                    change.style.display = "none"
                    showLess.style.display = "inline";
                }else{
                    console.log("works")
                    change.style.display = "inline";
                    showLess.style.display = "none";
                }
            }
        })
    }
    // Read more and show less end here

    // Not interest function starts here
    const btnName = {
        n1: "list1",
        n2: "list2",
        n3: "list3",
        n4: "list4",
        n5: "list5",
        n6: "list6",
        n7: "list7",
        n8: "list8",
    }
    const [interest,setInteres] = useState ([
        {list: "list1"},
        {list: "list2"},
        {list: "list3"},
        {list: "list4"},
        {list: "list5"},
        {list: "list6"},
        {list: "list7"},
        {list: "list8"},
    ])
   
    const handleInt = (name)=>{
        interest.map((lists)=>{
            const {list} = lists;
            if(name == list){
                document.getElementById(name).style.display = "none";
            }
        })
    }
    // Not interest ends here


   const [show, setShow] = useState(true);
//    useEffect(() =>{
//     const handleClick = event =>{
//         console.log("clicked")
//         ref1.style.display = "none";
//     }
//     const element = ref1.current;
//     element.addEventListener("click", handleClick);
//     return () =>{
//         element.removeEventListener('click', handleClick)
//     }
//    },[]);
//    const handleHide =()=>{
//     var more = document.getElementById("more")
//     if(show){
//         setShow(false);
//         more.style.display = "none"
//     }else{
//         setShow(true);
//     }
    
//    }
  return (
   <>
    <main>
            <div className="container">
                <div className="headline">
                    <h3>Take yourself</h3>
                    <h1>Adventure Ideas</h1>
                </div>

                <div className="columns">
                    <ul className="col">
                        <li id="list1">
                            <img src={Boat} alt="" />
                            <div className="description">
                                <div className="head">
                                    <h2>Kayaking</h2>
                                        <div className="stars">
                                            <img src={Star1} alt="" />
                                            <img src={Star1} alt="" />
                                            <img src={Star1} alt="" />
                                            <img src={Star2} alt="" />
                                            <img src={Star2} alt="" />
                                        </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more1" style={{display: "inline"}}  onClick={()=>handle(btn.id1)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more1">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id1)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n1)}>Not Interested</button>
                        </li>
                        <li id="list2">
                            <img src={Sky} alt="" />
                            <div className="description">
                                <div className="head">
                                    <h2>Sky Diving</h2>
                                    <div className="stars">
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star2} alt="" />
                                        <img src={Star2} alt="" />
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more2"  style={{display: "inline"}} onClick={()=>handle(btn.id2)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more2">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id2)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n2)}>Not Interested</button>
                        </li>
                        <li id="list3">
                            <img src={Canoe} alt="Canoe" />
                            <div className="description">
                                <div className="head">
                                    <h2>Canoeing</h2>
                                    <div className="stars">
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star2} alt="" />
                                        <img src={Star2} alt="" />
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more3"  style={{display: "inline"}} onClick={()=>handle(btn.id3)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more3">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id3)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n3)}>Not Interested</button>
                        </li>
                        <li id="list4">
                            <img src={Dive} alt="" />
                            <div className="description">
                                <div className="head">
                                    <h2>Bungee jump</h2>
                                    <div className="stars">
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star2} alt="" />
                                        <img src={Star2} alt="" />
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more4" style={{display: "inline"}} onClick={()=>handle(btn.id4)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more4">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id4)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n4)}>Not Interested</button>
                        </li>
                        <li id="list5">
                            <img src={Sket} alt="" />
                            <div className="description">
                            <div className="head">
                                    <h2>Skiing</h2>
                                    <div className="stars">
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star2} alt="" />
                                        <img src={Star2} alt="" />
                                    </div>
                            </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more5" style={{display: "inline"}} onClick={()=>handle(btn.id5)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more5">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id5)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n5)}>Not Interested</button>
                        </li>
                        <li id="list6">
                            <img src={Diver} alt="" />
                            <div className="description">
                                <div className="head">
                                    <h2>Cage Diving</h2>
                                    <div className="stars">
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star2} alt="" />
                                        <img src={Star2} alt="" />
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more6" style={{display: "inline"}} onClick={()=>handle(btn.id6)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more6">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id6)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n6)}>Not Interested</button>
                        </li>
                        <li id="list7">
                            <img src={Board} alt="Surfing" />
                            <div className="description">
                                <div className="head">
                                    <h2>Surfing</h2>
                                    <div className="stars">
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star2} alt="" />
                                        <img src={Star2} alt="" />
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more7" style={{display: "inline"}} onClick={()=>handle(btn.id7)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more7">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id7)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n7)}>Not Interested</button>
                        </li>
                        <li id="list8">
                            <img src={Ship} alt="" />
                            <div className="description">
                                <div className="head">
                                    <h2>Boat Cruise</h2>
                                    <div className="stars">
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star1} alt="" />
                                        <img src={Star2} alt="" />
                                        <img src={Star2} alt="" />
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Reiciendis amet a qui pariatur quo officia voluptas fugit minus, 
                                    exercitationem nobis unde quidem natus iure ratione quod earum voluptates, 
                                    aliquid enim aliquam?<span id="more8" style={{display: "inline"}} onClick={()=>handle(btn.id8)}>...<span className="Read">Read More</span></span> <span id={show ? "hide" : "change"} className="more8">Repellat nobis ipsa ipsam suscipit voluptas. Magni, 
                                    atque totam quos porro, veniam excepturi, mollitia sapiente enim iste consequatur provident. <span id="showLess" onClick={()=>handle(btn.id8)}>Show Less</span></span> 
                                </p>
                            </div>
                            <button onClick={()=>handleInt(btnName.n8)}>Not Interested</button>
                        </li>
                    </ul>
                    <div className="postal">
                        <div className="first-postal">
                            <div className="container">
                                <h1>Making adventure tours, activities affordable.</h1>
                                <div className="line"></div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus eaque magnam cumque ipsum debitis non! Eius porro reprehenderit atque rerum veritatis! Consequuntur 
                                    inventore nostrum veniam quisquam dolores repellat doloribus voluptates aliquid deserunt incidunt dicta et aliquam soluta, accusamus tenetur.
                                </p>
                            </div>
                        </div>
                        <div className="second-postal">
                            <div className="container">
                                <img src={People} alt="People" />
                            
                            </div>
                        </div>
                    </div>
                    <div className="testimonies">
                        
                        <div className="heading">
                            <h3>Client Testimonials</h3>
                            <h1>Adventure Talk</h1>
                        </div>
                        <div className="image">
                            <div className="icons">
                            <span className="left"><AiOutlineArrowLeft /></span>
                            <span className="right"><AiOutlineArrowRight /></span>
                            </div>
                            <img src={Circle} alt="" />
                            <blockquote>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam error soluta accusantium ipsa, facere molestiae consectetur praesentium deleniti voluptatum neque voluptatem, 
                                aperiam necessitatibus, ea magni nisi similique voluptate nam esse?
                                <h4>Adrian Mctominay</h4>
                                <cite>Tourist</cite>
                            </blockquote>
                        </div>
                    </div>
                
                </div>
                
                
            </div>
        </main>
    </> 
  )
}
