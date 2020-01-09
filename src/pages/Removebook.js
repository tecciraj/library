import React, {Component} from 'react';

class Removebook extends Component{
    render(){
        return(
            <div className="remove-book-form">
            <div className="topic-head"><h2>Remove Book</h2></div>
            <div className="FormField">
              <label for="bookid">Book Id</label><input id="bookid" type="text"/>
            </div>
            <div className="FormField">
                <label for="bookName">Book Name</label><input id="mobNo" type="text"/>
            </div>
            <div className="FormField">
                <label for="bkqty">No of Books</label><input id="bkqty" type="text"/>
            </div>
            <div className="FormField">
              <button className="register-bk-sub-btn">Submit</button>
            </div>
          </div>
        );
    }
}

export default Removebook;