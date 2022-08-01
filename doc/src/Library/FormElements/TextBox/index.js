import React from 'react';

export const TextBox = () =>{
 return(<div className="form-floating">
 <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
 <label for="floatingTextarea"></label>
</div>);
};