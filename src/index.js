import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
 return (
     <div className="ui container comments">
       <ApprovalCard>
         <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45pm" 
          text="Nice blog post" 
          avatar={faker.image.image()} 
         />
        </ApprovalCard>  
        
        <ApprovalCard>
         <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00am" 
          text="Dope post!" 
          avatar={faker.image.image()} 
         />
        </ApprovalCard> 

        <ApprovalCard>
         <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 5:00pm" 
          text="We love it!" 
          avatar={faker.image.image()} 
         />
        </ApprovalCard> 

     </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"))