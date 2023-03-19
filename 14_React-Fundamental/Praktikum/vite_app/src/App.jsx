// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Create Product</h1>
      <h2>Detail Product</h2>
      <label>Product Name</label> : <br />
      <input type="text" /> <br />
      <br />
      <label>Product Category :</label> <br />
      <select>
        <option />
        <option />
        <option />
      </select>{" "}
      <br />
      <br />
      <label>Product Freshness</label> : <br />
      <input type="radio" name="pf" /> Brand New <br />
      <input type="radio" name="pf" /> Second Hank <br />
      <input type="radio" name="pf" /> Refurbished <br />
      <br />
      <label>
        Image of Product <input type="file" />
      </label>{" "}
      <br />
      <br />
      <label>Additional Description</label>
      <br />
      <textarea rows={10} cols={30} defaultValue={""} /> <br />
      <br />
      <label>Product Price :</label>
      <br />
      <input type="number" placeholder="$ 100" /> <br />
      <br />
      <button type="submit">Submit</button>
    </div>
  )
}

export default App
