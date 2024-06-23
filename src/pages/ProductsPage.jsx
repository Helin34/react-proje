import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';





const ProductsPage = () => {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:3000/books")
            .then((res) => setBooks(res.data))
            .catch((err) => { });// hata sayfası
    }, []);
    console.log(books);
    if (books === null) return 'Loading...';
    return (
        <div>
            <h3 className='px-6 mt-3'>{books.length} kitap bulundu</h3>
            <div className='cards-container'>
                {books.map((book) => (
                    <Card key={book.id} data={book} />
                )


                )}
            </div>
        </div>
    );
};

export default ProductsPage
