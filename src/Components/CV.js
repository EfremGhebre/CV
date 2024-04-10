import React from "react";
import Meriter from "./Meriter.json";

const CV = () => {

     return( 
        <>        
    <section className="container">  
        <div className="side-panel" >
        
                <h3 style={{marginBottom: "20px"}}>Person uppgifter</h3>
                Namn <p>Efrem Ghebre</p>  
                mobil <p>073-557 0636</p>
                adress <p>Bergvägen 9f</p> <p>91534 Ånäset</p>
                e-post <p>efremg69@gmail.com</p>       
                <h3>Språk</h3> 
                <p>tigrinja: modersmål</p>
                <p>engelska: flytande (CEFR-nivå C2)</p> 
                <p>arabiska: flytande (CEFR-nivå C2)</p> 
                <p>svenska: avancerad (CEFR-nivå C1)</p>                   
                <h3>Egenskaper</h3> 
                <p>Lättsam, snabb lärd, positiv och social</p>                
                <h3>Hobbys och intressen</h3> 
                <p>- Lyssna på musik och promenera</p>            
                <p>- Titta på filmer och dokumentär          
                filmer</p>
                <p>- Spela TV spel med mina barn </p>
                <p>- Träna barn basketboll</p>              
        </div>     
        <div className="cv-text">        
            <h1>Arbetslivserfarenhet</h1>
           <ul >
            {
              Meriter.Arbetslivserfarenhet.map((arbete)=>(
                <li >                         
                    <h3>{arbete.title}, {arbete.date}</h3>
                    <p>{arbete.company}</p>
                    <p>{arbete.description}</p>
                </li>
            ))}
            </ul>       
            <h1>Utbildning</h1>
            <ul >
            {
              Meriter.Utbildning.map((utbildning)=>(
                <li>                         
                    <h3>{utbildning.title}, {utbildning.date}, </h3>
                    <p>{utbildning.location}</p>
                    <p>{utbildning.description}</p>
                </li>
                ))}
            </ul>      
            <h1>Kurser</h1>
            <ul >
            {
              Meriter.Kurser.map((kurser)=>(
                <li>                         
                    <h3>{kurser.title} </h3>                    
                    <p>{kurser.description}</p>
                </li>
                ))}
            </ul>
        </div>
    </section>
    </>
    );
}
export default CV
