import React, {Component} from 'react';

class LendBook extends Component{
    render(){
        return(
            <div className="lend-book-form">
            <div className="topic-head"><h2>Lend Book</h2></div>
            <div className="FormField">
              <label for="requisteename">Consumer Name</label><input id="requisteename" type="text"/>
            </div>
            <div className="FormField">
                <label for="mobNo">Mobile Number</label><input id="mobNo" type="text"/>
            </div>
            <div className="FormField">
              <label for="address">Address</label><input id="address" type="text"/>
            </div>
            <div className="FormField">
              <label for="bookid">Book Id</label><input id="bookid" type="text"/>
            </div>
            <div className="FormField">
              <label for="bookname">Bookname</label><input id="bookName" type=""/>
            </div>
            <div className="FormField">
              <label for="issueDate">Issued On</label><input id="issueDate" type="text"/>
            </div>
            <div className="FormField">
              <button className="register-bk-sub-btn">Submit</button>
            </div>
          </div>
        );
    }
}

export default LendBook;