import React, { useState } from 'react';
import './styles/styles.css';   // Importing styles
import './styles/spinner.css';  // Importing spinner styles

export default function Counter() {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Async function to fetch data
    const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/4');
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setResult(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="counterApp">
            <p>Count : {count}</p>

            <button onClick={() => setCount(count + 1)} className="button">Increment</button>
            <button onClick={() => count > 0 && setCount(count - 1)} className="button">Decrement</button>
            <button onClick={() => setCount(0)} className="button">Reset</button>

            <button className="button" onClick={getData} disabled={loading}>
                Get Data
            </button>

            <div className="container">
                {loading ? (
                    <div className="loadingContainer">
                        <div className="spinner"></div> {/* Show spinner while loading */}
                    </div>
                ) : result ? (
                    <div className="resultContainer">
                        <p><strong>ID:</strong> {result.id}</p>
                        <p><strong>Title:</strong> {result.title}</p>
                        <p><strong>Body:</strong> {result.body}</p>
                    </div>
                ) : (
                    <div className="resultContainer">
                        <h4>No Content</h4> {/* Show this message if no data */}
                    </div>
                )}
            </div>
        </div>
    );
}
