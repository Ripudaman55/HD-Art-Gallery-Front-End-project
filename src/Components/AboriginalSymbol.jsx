import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import './AboriginalSymbol.css';

function AboriginalSymbol() {
  // State for storing symbol data and new symbol inputs
  const [symbols, setSymbols] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Fetch symbol data from API on component mount
  useEffect(() => {
    fetchSymbols();
  }, []);

  // Function to fetch symbol data from API
  const fetchSymbols = async () => {
    try {
      const response = await axios.get('http://localhost:5132/api/aboriginalsymbol'); // Assuming the API endpoint is /api/aboriginalsymbol
      console.log(response)
      console.log("asdfsf")
      setSymbols(response.data); // Update symbols state with data from API
      console.log(symbols);
    } catch (error) {
      console.error('Error fetching symbols:', error);
    }
  };

  // Function to handle form submission for adding a new symbol
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to API to add new symbol
      await axios.post('http://localhost:5132/api/aboriginalsymbol', {
        name,
        description,
        imageUrl
      });
      alert("helo");
      // Clear input fields and fetch updated symbol data
      setName('');
      setDescription('');
      setImageUrl('');
      fetchSymbols();
    } catch (error) {
      console.error('Error adding symbol:', error);
    }
  };

  return (
    <div className="container">
      {/* Form for adding new symbol */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Symbol</button>
      </form>

      {/* Display symbols in a table */}
      <div className="symbol-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {symbols.map(symbol => (
              <tr key={symbol.symbolid}>
                <td>{symbol.symbolname}</td>
                <td>{symbol.description}</td>
                <td>
                  <img src={symbol.imageUrl} alt={symbol.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AboriginalSymbol;
