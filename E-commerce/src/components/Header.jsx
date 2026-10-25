const Header = ({ cart }) => {
  return (
    <header className="container-fluid bg-primary py-3 px-4 mb-4">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav justify-content-center gap-3 bg-light py-3 px-4 mb-4  ">
            <li className="nav-item text-decoration-none ">
              <a href="/" className="nav-link text-decoration-none">
                Home
              </a>
            </li>
            <li className="nav-item text-decoration-none">
              <a href="/services" className="nav-link text-decoration-none">
                Services
              </a>
            </li>
            <li className="nav-item text-decoration-none">
              <a href="/about" className="nav-link text-decoration-none">
                Add Product
              </a>
            </li>
            <li className="nav-item ms-auto ">
              <a href="MyCart.jsx" className="nav-link text-decoration-none">
                Cart:{cart.length}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
