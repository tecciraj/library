import React, {Component} from 'react';

class Searchbook extends Component{
    render(){
        return(
            <div className="search-book-form">
                <div className="topic-head"><h2>Search Book</h2></div>
                <div className="SearchFormField">
                    <label for="mobNo">Enter Book Id (or) Book name</label><br/><input id="searchkey" type="text"/><i className="fa fa-search"></i>
                </div>
                <div><br/><br/>
                    <table className="searchtable">
                        <tr>
                            <th>Book Id</th>
                            <th>Book Title</th>
                            <th>Book Type</th>
                            <th>Author</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>1233</td>
                            <td>Hello world</td>
                            <td>Welcomming</td>
                            <td>Lingaraj</td>
                            <td>23</td>
                            <td>Rs 3000</td>
                        </tr>
                        <tr>
                            <td>5263</td>
                            <td>Jonat</td>
                            <td>Steplre</td>
                            <td>Federel</td>
                            <td>53</td>
                            <td>Rs 500</td>
                        </tr>
                        <tr>
                            <td>5335</td>
                            <td>estnso</td>
                            <td>faring</td>
                            <td>Andrea</td>
                            <td>56</td>
                            <td>Rs 5000</td>
                        </tr>
                        <tr>
                            <td>6553</td>
                            <td>fed off</td>
                            <td>you and i</td>
                            <td>Cameron</td>
                            <td>100</td>
                            <td>Rs 8000</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

}

export default Searchbook;