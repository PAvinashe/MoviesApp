import {useState, useEffect} from "react";

const LikeMovie = (props) => {

    let [liked, setLiked] = useState([]);

        

        useEffect(() => {
            let LikedList2 = JSON.parse(localStorage.getItem("LikedList")) 
            if(LikedList2 === null){
                localStorage.setItem("LikedList", JSON.stringify(liked));
            }else{
                LikedList2 = JSON.parse(localStorage.getItem("LikedList"))
                setLiked(LikedList2);
            }            
            
            }, []);           
    

    const toggle = () => {      
        const id = props.onClick;
        console.log("LN37", id);       
        let LikedList2 = JSON.parse(localStorage.getItem("LikedList")) 
            console.log("LN22 :", id, LikedList2);   
            if(LikedList2.includes(id)=== false)  {
                LikedList2.push(id)
                setLiked(LikedList2)
                console.log("LN32:", liked)
                localStorage.setItem("LikedList", JSON.stringify(LikedList2));
            } else {       
                console.log("LN36 :", LikedList2);         
                let index = LikedList2.indexOf(id);
                console.log("LN37 :", index);   
                 LikedList2.splice(index, 1);
                    console.log("LN40 :", LikedList2);
                    setLiked(LikedList2)
                localStorage.setItem("LikedList", JSON.stringify(LikedList2));
            }
        
       }      

       
   
    return(
        
        <div onClick={toggle} className="like">{
            liked.includes(props.onClick) === false ?(
             <i  id="btn" className="far fa-heart"></i>
            ) : (
             <i id="btn" className="fas fa-heart"></i>
            )
        }                               
        </div>
                                       
    );
}

export default LikeMovie;