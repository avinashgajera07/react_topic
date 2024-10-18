import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discount: "",
    oldPrice: "",
    newPrice: "",
    image: "",
  });

  const [products, setProducts] = useState([]);

  // Handle form input change for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result, // Store the image as a Base64 string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post data to fake API (json-server)
      const response = await axios.post("http://localhost:3000/products", formData);
      setProducts([...products, response.data]);
      // Reset the form
      setFormData({
        title: "",
        price: "",
        discount: "",
        oldPrice: "",
        newPrice: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Fetch products from db.json on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="discount"
          placeholder="Discount"
          value={formData.discount}
          onChange={handleChange}
        />
        <input
          type="number"
          name="oldPrice"
          placeholder="Old Price"
          value={formData.oldPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="newPrice"
          placeholder="New Price"
          value={formData.newPrice}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Product List</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.oldPrice}</td>
              <td>{product.newPrice}</td>
              <td>
                {product.image && <img src={product.image} alt={product.title} width="50" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
