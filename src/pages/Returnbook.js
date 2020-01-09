import React, {Component} from "react";

class Returnbook extends Component{
    constructor(props){
        super(props);
        this.state={mobNo: '',
                    bookid:'',
                    issueDate:''
                }; 
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        let target=e.target;
        let value=target.type === 'checkbox' ? target.checked : target.value;
        let name=target.name;

        this.setState({
            [name] : value
        });
    }
    
    handleSubmit(event){
        alert("Form is submitted"+this.state.issueDate);
        event.preventDefault();
    }
    render(){
        return(
            <div className="return-book-form">
            <div className="topic-head"><h2>Return Book</h2></div>
            <div className="FormField">
                <label htmlFor="mobNo">Consumer Mobile Number</label>
                <input id="mobNo" type="text" value={this.mobNo}  onChange={this.handleChange}/>
            </div>
            <div className="FormField">
              <label htmlFor="bookid">Book Id</label>
              <input id="bookid" type="text" value={this.bookid} onChange={this.handleChange}/>
            </div>
            <div className="FormField">
              <label htmlFor="issueDate">Issued On</label>
              <input id="issueDate" type="text" value={this.issueDate} onChange={this.handleChange}/>
            </div><br/>
            <div className="FormField">
              <button className="register-bk-sub-btn" value="Submit " onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        );       
    }
}


export default Returnbook;