import React from 'react';
import Image from './Images/mypic.png';

export default function Home(){
    return(   
        <>            
        <section className="container">
        <div className='img'> 
            <img src={Image} alt='Efrem Ghebre'/>            
        </div>
        <div className="description" >
            <h1>Hejsan!</h1> 
                <h4> Jag heter <span>Efrem</span>,         
                    och just nu läser jag YH programmet <span style={{fontSize:"1.5em", fontStyle: "italic"}}>
                    "Systemutveckling .NET med AI kompetens"</span> via EduGrade. Bläddra gärna 
                    genom menyn för att veta mer om mig.</h4>     
                                
        </div>            
    </section>
    </>   
    ); }
