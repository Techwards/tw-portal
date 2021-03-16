import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfinateScrolling = () => {
    const [isItems, setItems] = useState([]);
useEffect(() => {
    fetchData()
    
}, [])
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setItems([...isItems, ...json]));
    }
    //return <h3>Scrolling Page</h3>
    return <InfiniteScroll
        dataLength={isItems.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
       {isItems.map((i, index) => (
            <div key={index}>
                {i.title}
            </div>
          ))}
    </InfiniteScroll>
}

export default InfinateScrolling;