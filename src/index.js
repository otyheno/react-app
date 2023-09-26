import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
    author: 'James Clear.',
    title: 'Atomic Habits',
    img: './images/atomic_habits.jpg'
}

const secondBook = {
    author: 'Rebecca Yarros.',
    title: 'Iron Flames',
    img: './images/iron_flame.jpg'
}

// const author = 'James Clear.';
// const title = 'Atomic Habits';
// const img = './images/atomic_habits.jpg';

{/* <Book author={author} title={title} img={img}/> */}

function BookList(props){
    const {img, title, author } = props;
    return (
        <section className='booklist'>
            <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
            <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
        </section>
    );
}

const Book = (props) => {    
    return <article className='book'>
        <img src={props.img}></img>
        <h2>{props.title}</h2>
        <h4 style={{ color:'#617D98', fontSize:'0.75reb', marginTop:'0.5rem'}}>{props.author.toUpperCase()}</h4>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);

//export default Greeting;