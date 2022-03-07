// import logo from "./logo.svg";
// import { Fragment } from "react";
import twit from './images/twitter-brands.svg';
import "./App.css";
import {quotes} from "./quotes";
// import Button from 'react-bootstrap/Button';

function Quote (){
  const showRandom = Math.floor(Math.random() * quotes.length); 
  const newQuotes = quotes.filter(quote=>quote.id===showRandom);
  console.log(newQuotes);
  let url

  return(
    <div id="quote-box">
      <section className="quoteSection">
      {newQuotes.map((q)=>{
        const {id,quote,author}=q;
        url=`https://twitter.com/intent/tweet?text="${quote}" ${author}`;
        return(
          <div className="quoteBlock" key={id}>
            <p id="text">" {quote} "</p>
            <p id="author">-- {author} --</p>
            {/* <p>{id}</p> */}
          </div>
        )    
      })}
      </section>
      <div className="shareSection">
        <a  href={url} target="blank" id="tweet-quote"><img className='twitLogo' src={twit} alt="twitLogo" width="20" height={20}></img></a>
        <button id="new-quote" onClick={()=>window.location.reload(false)} className="nextBtn" variant="primary">next quote</button>
      </div>
    </div>
    
  )
}


function App() {
  
  
  return (
    <Quote/>
    // <div id="quote-box">
      
      
    // </div>
  );
}

export default App;
