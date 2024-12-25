import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/titles')
            .then((res) => setTitles(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Popular Movies and Shows</h1>
            <div className="grid">
                {titles.map((title) => (
                    <div key={title._id}>
                        <img src={title.thumbnail} alt={title.name} />
                        <p>{title.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
