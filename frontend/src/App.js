import data from "./data";
function App() {
  return (
    <div>
      <header>
        <a href="/">Fashion Shop</a>
      </header>
      <main>
        <h1>list products</h1></main>
      <div>
       {data.products.map((product) => (
       <div key={product.slug}>
        <a href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name}/>
        </a>
        <div>
        <p>{product.name}</p>
         <p><strong>{product.price}</strong></p>
         <button>Add To Cart</button>
          </div>
</div>
))}
</div>
       </div>
  );
}

export default App;
