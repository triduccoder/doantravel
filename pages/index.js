import HeaderIndex from '../pages/headerIndex'

const Home = () =>{
  return(
    <>
    <HeaderIndex />
    {/* ===========footer============ */}
<footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          </div>
        </form>
    </section>
    <section className="mb-4">
      <p>
      Hãy sống dưới ánh mặt trời, bơi trên đại dương và thưởng thức không khí của thiên nhiên hoang dã.
      </p>
    </section>
    <section className="">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">NHÓM THỰC HIỆN</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Nguyễn Đình Hiếu</a>
            </li>
            <li>
              <a href="#!" className="text-white">Ngô Trí Đức</a>
            </li>
            <li>
              <a href="#!" className="text-white">Phạm Kim Thành</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Liên Hệ</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Facebook</a>
            </li>
            <li>
              <a href="#!" className="text-white">Zalo</a>
            </li>
            <li>
              <a href="#!" className="text-white">Twitter</a>
            </li>
            <li>
              <a href="#!" className="text-white">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Công cụ</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Visual studio code</a>
            </li>
            <li>
              <a href="#!" className="text-white">ReactJs</a>
            </li>
            <li>
              <a href="#!" className="text-white">NodeJs</a>
            </li>
            <li>
              <a href="#!" className="text-white">MongoDB</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Khác</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Nhà Hàng</a>
            </li>
            <li>
              <a href="#!" className="text-white">Khách Sạn</a>
            </li>
            <li>
              <a href="#!" className="text-white">Vé Máy Bay</a>
            </li>
            <li>
              <a href="#!" className="text-white">Khu Nghĩ Dưỡng  </a>
            </li>
          </ul>
        </div>
        </div>
      </section>
    </div>
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a className="text-white" href="#"> TEAM3PRO</a>
  </div>
  </footer>
</>
  )
}


export default Home