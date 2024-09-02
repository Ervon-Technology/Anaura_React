import React,{useState} from "react";
import "./Fashion.css";
import brown from "../../images/brown_outfit.jpg";
import green from "../../images/green_outfit.jpg";
import peach from "../../images/peach_outfit.jpg";
import peacock from "../../images/peacock_ourfit.jpg";
import white from "../../images/white_outfit.jpg";
// import scarf from "../../images/scarf_outfit.jpg";

function Fashion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { src: green, alt: "Green" },
    { src: peach, alt: "Peach" },
    { src: peacock, alt: "Peacock" },
  ];

  const handleSelect = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      {/* main-content-fashion */}
      <div className="container-fluid main-content-fashion-11">
        <div className="row">
          <div className="col-xl-3 col-lg-5 col-6  main-content-fashion-3-column-1 order-2">
            
          </div>
          <div className="col-xl-9 col-lg-7 col-6  d-flex justify-content-center align-items-center m-0 p-0 order-1 main-content-fashion-3-column-2">
            <p className="fs-1 small-text-paragraph-11 text-center">
              FASHION HAS TO REFLECT WHO YOU ARE
            </p>
          </div>
        </div>
      </div>
      {/* main-content ends */}

      {/* main-content=fashion-1 */}

      <div className="container-fluid mt-5 pt-3 main-content-fashion-1">
        
        <div className="row h-100">
          <div className="col-lg-5 col-12 m-0 p-0 d-flex align-items-center justify-content-center pe-lg-3">
            <img src={brown} alt="" className="object-fit-cover" height={500} width='90%' />
          </div>
          <div className="col-lg-7 bg-secondary-subtle col-12 d-flex justify-content-center align-items-center ps-lg-3 mt-4 mt-lg-0 m-0 p-0">
                          <p className=" w-75 fw-1 fs-1  px-0">
                Step into the future of home fashion with recycled threads that
                redefine sustainability
              </p>
            
          </div>
        </div>
      </div>
      {/* main-content-fashion-1-ends */}
      {/* main-content-fashion-2- */}

      <div className="container-fluid main-content-fashion-2">
      <p className="fs-1 fw-bold text-center m-0 mt-4 ">Creative <span className="main-content-fashion-2-before"> Design </span></p>
      <p className="text-center small-text-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </p>

      <div className="custom-carousel-container">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === activeIndex ? "active-slide" : "inactive-slide"
              }`}
              onClick={() => handleSelect(index)}
            >
              <img
                src={slide.src}
                className="d-block mx-5 w-100 w-50 mx-auto img-fashion object-fit-cover"
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() =>
            handleSelect((activeIndex - 1 + slides.length) % slides.length)
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() =>
            handleSelect((activeIndex + 1) % slides.length)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

      {/* main-content-fashion-2-ends */}

      {/* main-content-fashion-3 */}

      <div className="container-fluid m-0 p-0 main-content-fashion-3 h-100 ">
        <div className="row">
          <div className="col-xl-3 col-lg-5 col-12 m-0 p-0 main-content-fashion-3-column-1 d-flex justify-content-center">
            <img src={white} alt="" className="img-fashion1 " />
          </div>
          <div className="col-xl-9  col-lg-7 col-12 bg-secondary-subtle d-flex justify-content-center align-items-center m-0 p-0 main-content-fashion-3-column-2">
            <p className="fs-1 small-text-paragraph-1">
              New generation of want brands to take a stand on issues close to
              their hearts.
            </p>
          </div>
        </div>
      </div>

      {/* main-content-fashion-3-ends */}

      {/* text-section-only */}
      <div className="container-fluid m-0 p-0 main-content-fashion-4 ">
        <p className="fs-1  small-text-paragraph-2 py-5">
          New generation of want brands to take a stand on issues close to their
          hearts.
        </p>
      </div>

      {/* text-section-only ends */}

      {/* text-section-only product */}
      <div className="container-fluid m-0 p-0 main-content-fashion-4 py-0 bg-secondary-subtle">
  <div className="row">
    <div className="col-4 col-md-2 main-content-fashion-4-back-img"> 
    </div>
    <div className="col-8 col-md-8 py-md-5 mx-md-5 ps-5">
      <div className="px-lg-5 mx-lg-4 py-md-0 py-5 ">
      <p className="fs-1  m-0 p-0">SPRING COLLECTION</p>
      <p className="fs-1  m-0 p-0">SUMMER COLLECTION</p>
      <p className="fs-1  m-0 p-0">WINTER COLLECTION</p>
      <p className="fs-1  m-0 p-0">SUSTAINABLE SPORTS WEAR</p>

      </div>
    </div>
  </div>
</div>


      {/* text-section-only product ends */}

      {/* button-section  */}
      <section className='fashion-last'>
            <div className="container d-flex  justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12  py-5 mt-3 text-center">
                    <h1 className='ml-5'>We’re here to save mother earth</h1>
                    <button className=' mt-3 rounded-pill btn btn-outline-light text-dark border abtbtn rounded-pill px-4'>Contact Us To Know How</button>
                    </div>
    
                </div>
                

            </div>

        </section>

      {/* button-section ends */}
    </div>
  );
}

export default Fashion;
