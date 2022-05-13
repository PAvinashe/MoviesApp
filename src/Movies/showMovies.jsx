import { useState, useEffect } from "react";
import LikeMovie from './like'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const LoadMovies = () => {
    const {darkMode} = useContext(ThemeContext);
    const [movies, setMovies] = useState([]);
    
    console.log("LN8- re-render")
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		        'X-RapidAPI-Key': '71e15f1d6bmshf20ffd47ccb8d5ap16f293jsn6ecb862f9779'
            }
        };
        
        fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
            .then(response => response.json())
            .then((data) => {
                console.log(data.d);
                setMovies(data.d)
                localStorage.setItem("moviesList", JSON.stringify(data.d));
            })
            .catch(err => console.error(err));        

    }, []);  
    

    return(       
            
            <div className={darkMode ? "mainDark" : "main"}>
                {
                    movies.map((item, index) => (
                       <div key={index} className="inn_container">
                           <div className="images"><img height={220} width={180} src={item.i.imageUrl} /></div>
                           <div className="titleRt">
                               <div className="title"><p>{item.l}</p></div>
                               <LikeMovie onClick={item.id} />
                           </div>
                       </div>
                    ))
                }
            </div>
        
    );
}

export default LoadMovies;