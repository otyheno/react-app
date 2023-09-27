import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// const firstBook = {
//     author: 'James Clear.',
//     title: 'Atomic Habits',
//     img: './images/atomic_habits.jpg'
// }

// const secondBook = {
//     author: 'Rebecca Yarros.',
//     title: 'Iron Flames',
//     img: './images/iron_flame.jpg'
// }

const books = [
    {
        author: 'James Clear.',
        title: 'Atomic Habits',
        img: './images/atomic_habits.jpg'
    },
    {
        author: 'Rebecca Yarros.',
        title: 'Iron Flames',
        img: './images/iron_flame.jpg'
    },
]

// const author = 'James Clear.';
// const title = 'Atomic Habits';
// const img = './images/atomic_habits.jpg';

{/* <Book author={author} title={title} img={img}/> */}

function BookList(){    
    return (
        <section className='booklist'>
            {/* <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                <button>Click Me</button>
            </Book>
            <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/> */}
           {books.map((book)=>{
            return {book}
           })}
        </section> 2:42
    );
}

const Book = (props) => {   
    const {img, title, author} = props; 
    return <article className='book'>
        <img src={img}></img>
        <h2>{title}</h2>
        <h4 style={{ color:'#617D98', fontSize:'0.75reb', marginTop:'0.5rem'}}>{author.toUpperCase()}</h4>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);

//export default Greeting;