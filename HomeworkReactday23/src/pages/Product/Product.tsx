
const Product = () => {
  return (
    <>
    <div className="row featurette mx-auto mb-5">
      <div className="col-md-5 order-md-2">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">Ignore</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sint sunt voluptas unde consectetur in. Debitis et aliquid labore voluptas magnam laborum pariatur odit eius enim ipsam facilis, provident hic!.</p>
          <b className="card-text">Price $39</b>
          <p className="card-text">Quantity.</p>
          <input type="number" className="form-control mb-3" placeholder=""/>
          <a href="#" className="btn btn-primary mx-2">Add To Cart</a>
          <a href="/checkout" className="btn btn-outline-secondary mx-2 px-4">Buy Now</a>
        </div>
        <div className="card">
          <div className="card-header">
            Featured
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </div>
      <div className="col-md-7 order-md-1">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
      </div>
    </div>

    <div className="card mx-3 w-80"> 
          <div className="card-header">
            Review
          </div>
          <ul className="list-group list-group-flush">
            <b className="ps-3">New</b>
            <li className="list-group-item">An item Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est nulla accusamus in voluptatem incidunt sint voluptatum alias neque laboriosam! Aliquid dignissimos minus pariatur adipisci autem temporibus tempora expedita magni.</li>
            <b className="ps-3">New-2</b>
            <li className="list-group-item">An item Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est nulla accusamus in voluptatem incidunt sint voluptatum alias neque laboriosam! Aliquid dignissimos minus pariatur adipisci autem temporibus tempora expedita magni.</li>
            <b className="ps-3">New-3</b>
            <li className="list-group-item">An item Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est nulla accusamus in voluptatem incidunt sint voluptatum alias neque laboriosam! Aliquid dignissimos minus pariatur adipisci autem temporibus tempora expedita magni.</li>
            <b className="ps-3">New-4</b>
            <li className="list-group-item">An item Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est nulla accusamus in voluptatem incidunt sint voluptatum alias neque laboriosam! Aliquid dignissimos minus pariatur adipisci autem temporibus tempora expedita magni.</li>
            <b className="ps-3">New-5</b>
            <li className="list-group-item">An item Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est nulla accusamus in voluptatem incidunt sint voluptatum alias neque laboriosam! Aliquid dignissimos minus pariatur adipisci autem temporibus tempora expedita magni.</li>
            <b className="ps-3">New-6</b>
            <li className="list-group-item">An item Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est nulla accusamus in voluptatem incidunt sint voluptatum alias neque laboriosam! Aliquid dignissimos minus pariatur adipisci autem temporibus tempora expedita magni.</li>
            <b className="ps-3">New-7</b>
            <li className="list-group-item">An item Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est nulla accusamus in voluptatem incidunt sint voluptatum alias neque laboriosam! Aliquid dignissimos minus pariatur adipisci autem temporibus tempora expedita magni.</li>
          </ul>
        </div>
    </>
  )
}

export default Product