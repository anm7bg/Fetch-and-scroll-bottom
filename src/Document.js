export default function Document({ title, content }) {

    const scrollBottom = (e) => {
        if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
            document.querySelector('button').removeAttribute('disabled');
        }
    }
  

    return(
        <section>
            <h1 className="title">{title}</h1>
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