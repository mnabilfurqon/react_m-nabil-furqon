import CreateProduct from '../components/createProduct'
import Route from '../router/route'
// import './App.css'

function App() {

  return (
    <div className="App">
      <Route path="/">
        <CreateProduct></CreateProduct>
      </Route>
    </div>
  )
}

export default App
