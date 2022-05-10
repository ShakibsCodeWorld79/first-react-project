import React from 'react'
import Book from '../src/Book/Book'
import '../src/Style/Book.css'

class App extends React.Component {
  
  state = {
    Book: [
      {id: 1, bookName:"Tin Goyenda", author:"Masud Rana", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
      {id: 2, bookName:"Somoyer Proyojone", author:"Zohir Raihan", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
      {id: 3, bookName:"Rokatkto Prantor", author:"Munir Chowdhuri", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
      
    ],

    ShowBookState: true
  }

  changeState = () => {
    this.setState({
      Book: [
        {bookName:"Tushar Manob", author:"Masud Rana", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
        {bookName:"Somoyer Proyojone", author:"Zohir Raihan", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
        {bookName:"Koprotonik Valobasha", author:"Md Zafor Iqbal", description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."},
        
      ]
    });
  };

  changeStateWithInput = (event, index) => {
    const book = {...this.state.Book[index]};
    book.bookName = event.target.value;
    const books = [...this.state.Book];
    books[index] = book;
    this.setState({Book: books});
  };

  deleteState = (index) => {
    const books = this.state.Book;
    books.splice(index, 1);
    this.setState({
      Book: books
    });
  };

  toggleState = () => {
    this.setState({ ShowBookState: !this.state.ShowBookState });
  }
  

  render(){
    const books = this.state.Book.map((book, index) => {
      return(
        <Book bookName={book.bookName}
        author={book.author}
        description={book.description}
        inputName={(event) => this.changeStateWithInput(event, index)}
        delete={() =>this.deleteState(index)}
        key={book.id}
        />
      );
    });
    return(
      <div className='Body'>
        <button onClick={this.toggleState}>Toggle</button>
        {this.state.ShowBookState ? books : null}
        <button style={{textAlign: "center"}} onClick={this.changeState}>Change</button> 
      </div>
    );
  }
}

export default App