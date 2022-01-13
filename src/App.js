import logo from './logo.svg';
import './App.css';
import {quotes} from './quotes'

function Quote (){
  const showRandom = Math.floor(Math.random() * 102); 
  const newQuotes = quotes.filter(quote=>quote.id===showRandom);
  console.log(newQuotes);
  
  return(
    <section>
      
      {newQuotes.map((q)=>{
        const {id,quote,author}=q;
        return(
          
        <div key={id}>
          <p id="text">"{quote}"</p>
          <p id="author">{author}</p>
          <p>{id}</p>
        </div>
        )    
      })}
    </section>
  )
}






function App() {
  const url="twitter.com";
  
  return (
    
    <div id="quote-box">
      <Quote/>
      <a href={url} target="_blank">tweet this quote</a>
      <button type="button" id="new-quote">next quote</button>
    </div>
  );
}

export default App;