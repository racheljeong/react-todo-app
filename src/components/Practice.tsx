import React, {useState, useEffect} from "react";


const useTitle = (initialTitle : string) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle!.innerText = title;
    };
    useEffect(updateTitle, [title]);
  
    return setTitle;
  };
  

function Practice() {
    const newTitle = useTitle("Loading,,,");
    setTimeout(() => newTitle("Home"), 5000);
  
    return (
      <div className="App">
        <h1>hi</h1>
      </div>
    );

}
export default Practice;