import React from "react";

export default function App(props){
  //the "a" and "b" is like a short version of a database of messages which equals 2 Messages  
  const[messages, setMessages] = React.useState(["a","b"])


  return(
    //conditional rendering using && operator
    //first we get state number of messages which is 2
    //second <h1> tells gives us a message saying we have 2 messages
    //we place our javascript code or React code in curly braces with html tags <h1>
    //which is called *-------------CONDITIONAL RENDERING------------*
    <div>
      {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
    </div>
  )
}