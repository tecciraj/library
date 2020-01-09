import React, {Component} from 'react';
class Addbookform extends Component {
    render(){
        return(
            <div className="add-books-form">
            <div className="topic-head"><h2>Book Register</h2></div>
            <div className="FormField">
              <label htmlfor="bookTitle">Book Title :</label>
            </div>
            <div className="FormField">
                <label for="bookType">Book Type :</label><input id="bookType" type="text"/>
            </div>
            <div className="FormField">
              <label for="authorName">Author name :</label><input id="authorName" type="text"/>
            </div>
            <div className="FormField">
              <label for="editionNo">No. of Books :</label><input id="editionNo" type="text"/>
            </div>
            <div className="FormField">
              <label for="noofPages">No. of pages :</label><input id="noofPages" type=""/>
            </div>
            <div className="FormField">
              <label for="price">Price :</label><input id="price" type="text"/>
            </div><br/>
            <div className="FormField">
              <button className="register-bk-sub-btn">Add Book</button>
            </div>
          </div>
        );
    }
}

export default Addbookform;