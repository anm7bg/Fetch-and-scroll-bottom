import { useEffect } from "react";

export default function Document({ title="Terms and Conditions", content }) {

    const scrollBottom = (e) => {
        if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
            document.querySelector('button').removeAttribute('disabled');
        }
    }
  

    return(
        <section>
            <h2>{title}</h2>
            <article 
                style={{overflow: "scroll", height: "100px"}} 
                className="content"
                onScroll={scrollBottom}
            >
                {content}
            </article>
            <button disabled={true}>I Agree</button>
        </section>
    );
}