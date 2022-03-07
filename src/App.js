// import logo from "./logo.svg";
import "./App.css";
import {quotes} from "./quotes";
// import Button from 'react-bootstrap/Button';

function Quote (){
  const showRandom = Math.floor(Math.random() * quotes.length); 
  const newQuotes = quotes.filter(quote=>quote.id===showRandom);
  console.log(newQuotes);
  
  return(
    <section className="quoteSection">
      {newQuotes.map((q)=>{
        const {id,quote,author}=q;
        return(
          <div className="quoteBlock" key={id}>
            <p id="text">" {quote} "</p>
            <p id="author">-- {author} --</p>
            {/* <p>{id}</p> */}
          </div>
        )    
      })}
    </section>
  )
}


function App() {
  const url="twitter.com/intent/tweet";
  
  return (
    
    <div id="quote-box">
      <Quote/>
      <div className="shareSection">
        <a href={url} target="blank" id="tweet-quote">tweet this quote</a>
        <button className="nextBtn" variant="primary">next quote</button>
      </div>
    </div>
  );
}

export default App;
