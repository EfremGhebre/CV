import React from "react";

const Kontakt = () => {
    return(
    <section className="container" >
        <div id="contact">
            <h2 >Om du vill komma i kontakt med mig, 
            kan du gärna fylla i och skicka nedan blanketen</h2>
            <p><input type="text" placeholder="Namn" required name="Name" /></p>
            <p><input type="email" placeholder="Epost" required email ="Email"/></p>
            <p><input type="text" placeholder="Ämne" required name="Subject"/></p>
            <p><input class="msg"  type="text" placeholder="Meddelande" required name="Message"/></p>
            <p>
            <button class="btn" type="submit">Skicka</button>
            </p>
        </div>
    </section>
    );
}
export default Kontakt;