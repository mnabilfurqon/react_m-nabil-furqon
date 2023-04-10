import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productFreshness, setProductFreshness] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productList, setProductList] = useState([]);
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const productNameRegex = /^[a-zA-Z0-9\s]+$/;
    const productCategoryRegex = /^[a-zA-Z0-9\s]+$/;
    const productFreshnessRegex = /^[0-9]+$/;
    const productPriceRegex = /^[0-9]+$/;
    const productImageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi;

    if (!productNameRegex.test(productName)) {
    alert('Product name is invalid!');
    return;
    }

    if (!productCategoryRegex.test(productCategory)) {
    alert('Product category is invalid!');
    return;
    }

    if (!productFreshnessRegex.test(productFreshness)) {
    alert('Product freshness is invalid!');
    return;
    }

    if (!productPriceRegex.test(productPrice)) {
    alert('Product price is invalid!');
    return;
    }

    if (!productImageRegex.test(productImage)) {
      alert('Product image URL is invalid!');
      return;
    }

    const newProduct = {
      id: uuidv4(),
      productName: productName,
      productCategory: productCategory,
      productFreshness: productFreshness,
      productPrice: productPrice,
      productImage: productImage
    };
    setProductList([...productList, newProduct]);
    setProductName('');
    setProductCategory('');
    setProductFreshness('');
    setProductPrice('');
    setProductImage('');
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProductList(productList.filter((product) => product.id !== id));
    }
  };

  const handleImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  return (
    <div>
      <h1>Create Product Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
        <br />
        <label>
          Product Category:
          <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
        </label>
        <br />
        <label>
          Product Freshness:
          <input type="text" value={productFreshness} onChange={(e) => setProductFreshness(e.target.value)} />
        </label>
        <br />
        <label>
          Product Price:
          <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Product Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>{product.productImage}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateProduct;