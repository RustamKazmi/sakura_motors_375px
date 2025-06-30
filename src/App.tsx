import React, { useState } from 'react';
import './App.css'
import Navbar from './Shared/Navbar'

function App() {

  const [data, setData] = useState({

    name1: 'Hello'

  })

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data, // keep other properties
      name1: event.target.value, // update name1
    });

  }
  return (
    <>
      <Navbar />
      <div className='content-container'>
        <div className='hero-container w-100 '>
          <img className='hero-container-img w-100' src="/images/heroContainer.png" alt="" />
          <div className='input-form-container d-flex flex-column gap-3 shadow-sm'>
            <h1 className='text-center fw-bolder'>Search Vehicles</h1>
            <label htmlFor="keywords" className='fw-bold'>By Keywords</label>
            <div className='border-2 d-flex align-items-center bg-white shadow-lg px-3 py-1 rounded border text-secondary'>
              <img className='searchPng' src="icons/search.png" alt="" />
              <input className='w-100 border-0 form-control border-0 shadow-none' type="text" name='keywords' placeholder='Keywords' value={data.name1} onChange={onChangeHandler} />
            </div>
            <label htmlFor="filters" className='fw-bold'>By Filters</label>
            <div >
              <select className='border-2 bg-white shadow-lg px-3 py-2 rounded border text-secondary form-select'>
                <option className='px-3 py-2'>Make</option>
                <option className='px-3 py-2'>2</option>
                <option className='px-3 py-2'>3</option>
                <option className='px-3 py-2'>4</option>
              </select>
            </div>
            <div >
              <select className='border-2 bg-white shadow-lg px-3 py-2 rounded border text-secondary form-select'>
                <option className='px-3 py-2'>Model</option>
                <option className='px-3 py-2'>2</option>
                <option className='px-3 py-2'>3</option>
                <option className='px-3 py-2'>4</option>
              </select>
            </div>
            <div >
              <select className='border-2 bg-white shadow-lg px-3 py-2 rounded border text-secondary form-select'>
                <option className='px-3 py-2'>Gear</option>
                <option className='px-3 py-2'>2</option>
                <option className='px-3 py-2'>3</option>
                <option className='px-3 py-2'>4</option>
              </select>
            </div>
            <div className="d-flex align-items-center border-2 bg-white shadow-lg px-3 py-2 rounded border text-secondary form-select w-100" style={{ gap: "15px" }}>
              <span className="text-muted">Year</span>
              <div className="vr"></div>

              <select className="form-select border-0 shadow-none p-0">
                <option >Min</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>

              <div className="vr"></div>

              <select className="form-select border-0 shadow-none p-0 ">
                <option >Max</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>




            <div className='search-btn border-2 d-flex align-items-center bg-white justify-content-center w-100 shadow-lg px-3 py-2 rounded border text-secondary'>
              <img className='searchPng' src="icons/search.png" alt="" />
              <button className='accordion-button width-fit-content p-1 fw-bold text-white'>Search</button>
            </div>
          </div>
        </div>

        <div className="search-vehicles d-flex flex-column gap-4">
          <div className="action-btns w-100 pt-3 d-flex justify-content-center gap-3">
            <button className='action-btn action-btn-type px-4 py-2 '>Search By Type</button>
            <button className='action-btn action-btn-make px-4 py-2 '>Search By Make</button>
          </div>
          <div className="vehicles-container mx-auto d-flex flex-column gap-2">
            <div className="d-flex">
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Large bus (2)</p>
                <img className='pb-4' src="/vehicle-icons/large-bus.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Mini bus (2)</p>
                <img className='pb-4' src="/vehicle-icons/mini-bus.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Heavy Truck (2)</p>
                <img className='pb-4' src="/vehicle-icons/heavy-truck.png" alt="" />
              </div>
            </div>
            <div className="d-flex">
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Light Truck (2)</p>
                <img className='pb-4' src="/vehicle-icons/light-truck.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Van (2)</p>
                <img className='pb-4' src="/vehicle-icons/van.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Mini Van (2)</p>
                <img className='pb-4' src="/vehicle-icons/mini-van.png" alt="" />
              </div>
            </div>
            <div className="d-flex">
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Suv (2)</p>
                <img className='pb-4' src="/vehicle-icons/suv.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Sedan (2)</p>
                <img className='pb-4' src="/vehicle-icons/sedan.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Wagon (2)</p>
                <img className='pb-4' src="/vehicle-icons/wagon.png" alt="" />
              </div>
            </div>
            <div className="d-flex">
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Hatchback (2)</p>
                <img className='pb-4' src="/vehicle-icons/hatchback.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Pick Up (2)</p>
                <img className='pb-4' src="/vehicle-icons/pick-up.png" alt="" />
              </div>
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>machinery (2)</p>
                <img className='pb-4' src="/vehicle-icons/machinery.png" alt="" />
              </div>
            </div>
            <div className="d-flex">
              <div className="vehicle d-flex flex-column justify-content-between align-items-center shadow-md">
                <p className='pt-2 fs-6 w-100 text-center'>Tractor (2)</p>
                <img className='pb-4 w-75' src="/vehicle-icons/tractor.png" alt="" />
              </div>
            </div>
          </div>


          <div className="rounded-bottom shadow-sm">

          </div>



        </div>

        <div className="new-arrivals mb-4">
          <h1 className='text-center fw-bold'>New Arrivals</h1>
          <div className="card-container d-flex overflow-x-auto gap-3 p-3">
            <div className="card">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Nissan Civillian</h5>
                <p className='m-0'>Stock no : <span className='fw-bold'>9067</span></p>
                <button className='h1 d-flex align-items-center gap-2 border-0 bg-transparent my-4'><span>$7,347</span> <span className='h6 fw-medium m-0'>price (FOB)</span></button>
                <div className="d-flex gap-2">
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/speed-meter.png" alt="" />
                    <span>490000 Km</span>
                  </div>
                  <div className="vr"></div>
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/auto-manual.png" alt="" />
                    <span>Manual</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Nissan Civillian</h5>
                <p className='m-0'>Stock no : <span className='fw-bold'>9067</span></p>
                <button className='h1 d-flex align-items-center gap-2 border-0 bg-transparent my-4'><span>$7,347</span> <span className='h6 fw-medium m-0'>price (FOB)</span></button>
                <div className="d-flex gap-2">
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/speed-meter.png" alt="" />
                    <span>490000 Km</span>
                  </div>
                  <div className="vr"></div>
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/auto-manual.png" alt="" />
                    <span>Manual</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Nissan Civillian</h5>
                <p className='m-0'>Stock no : <span className='fw-bold'>9067</span></p>
                <button className='h1 d-flex align-items-center gap-2 border-0 bg-transparent my-4'><span>$7,347</span> <span className='h6 fw-medium m-0'>price (FOB)</span></button>
                <div className="d-flex gap-2">
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/speed-meter.png" alt="" />
                    <span>490000 Km</span>
                  </div>
                  <div className="vr"></div>
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/auto-manual.png" alt="" />
                    <span>Manual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='secondary-button ' style={{ marginLeft: "34%" }}>View More</button>
        </div>



        <div className="achievements p-4 d-flex flex-column gap-2 text-white">
          <div className="row gap-2">
            <div className="achievement-card d-flex flex-column justify-content-between p-2 shadow-lg">
              <div className='d-flex align-items-center gap-2 fw-bolder'>
                <div className='rounded-primary-button'>
                  <span className="material-symbols-outlined">
                    favorite
                  </span>
                </div>
                <p className='h1 m-0'>50+</p>
              </div>
              <p className='m-0'>Happy Customers</p>
            </div>
            <div className="achievement-card d-flex flex-column justify-content-between p-2 shadow-lg">
              <div className='d-flex align-items-center gap-2 fw-bolder'>
                <div className='rounded-primary-button'>
                  <span className="material-symbols-outlined">
                    favorite
                  </span>
                </div>
                <p className='h1 m-0'>50+</p>
              </div>
              <p className='m-0'>Happy Customers</p>
            </div>
          </div>
          <div className="row gap-2">
            <div className="achievement-card d-flex flex-column justify-content-between p-2 shadow-lg">
              <div className='d-flex align-items-center gap-2 fw-bolder'>
                <div className='rounded-primary-button'>
                  <span className="material-symbols-outlined">
                    favorite
                  </span>
                </div>
                <p className='h1 m-0'>50+</p>
              </div>
              <p className='m-0'>Happy Customers</p>
            </div>
            <div className="achievement-card d-flex flex-column justify-content-between p-2 shadow-lg">
              <div className='d-flex align-items-center gap-2 fw-bolder'>
                <div className='rounded-primary-button'>
                  
                </div>
                <p className='h1 m-0'>50+</p>
              </div>
              <p className='m-0'>Happy Customers</p>
            </div>
          </div>
        </div>



        <div className="best-deals mt-5 overflow-x-hidden">
          <h1 className='text-center fw-bold'>Best Deals</h1>
          <div className="card-container d-flex overflow-x-auto gap-3 p-3">
            <div className="card">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Nissan Civillian</h5>
                <p className='m-0'>Stock no : <span className='fw-bold'>9067</span></p>
                <button className='h2 d-flex align-items-center gap-1 border-0 bg-transparent my-4 '>
                  <div className='d-flex align-items-center'>
                    <img src="/images/price-down.png" alt="" /> <span className='vehicle-price'>$7,347</span>
                  </div>
                  <span className='h6 fw-medium m-0'>price (FOB)</span></button>
                <div className="d-flex gap-2">
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/speed-meter.png" alt="" />
                    <span>490000 Km</span>
                  </div>
                  <div className="vr"></div>
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/auto-manual.png" alt="" />
                    <span>Manual</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Nissan Civillian</h5>
                <p className='m-0'>Stock no : <span className='fw-bold'>9067</span></p>
                <button className='h2 d-flex align-items-center gap-1 border-0 bg-transparent my-4 '>
                  <div className='d-flex align-items-center'>
                    <img src="/images/price-down.png" alt="" /> <span className='vehicle-price'>$7,347</span>
                  </div>
                  <span className='h6 fw-medium m-0'>price (FOB)</span></button>
                <div className="d-flex gap-2">
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/speed-meter.png" alt="" />
                    <span>490000 Km</span>
                  </div>
                  <div className="vr"></div>
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/auto-manual.png" alt="" />
                    <span>Manual</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/vehicle-img.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next rounded-circle bg-black d-flex align-self-center mx-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Nissan Civillian</h5>
                <p className='m-0'>Stock no : <span className='fw-bold'>9067</span></p>
                <button className='h2 d-flex align-items-center gap-1 border-0 bg-transparent my-4 '>
                  <div className='d-flex align-items-center'>
                    <img src="/images/price-down.png" alt="" /> <span className='vehicle-price'>$7,347</span>
                  </div>
                  <span className='h6 fw-medium m-0'>price (FOB)</span></button>
                <div className="d-flex gap-2">
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/speed-meter.png" alt="" />
                    <span>490000 Km</span>
                  </div>
                  <div className="vr"></div>
                  <div className='d-flex align-items-center gap-1'>
                    <img src="/images/auto-manual.png" alt="" />
                    <span>Manual</span>
                  </div>
                </div>
              </div>
            </div>



          </div>
          <button className='secondary-button ' style={{ marginLeft: "34%" }}>View More</button>
          <div className="rounded-bottom shadow-sm">

          </div>
        </div>


        <div className="procedure">
          <h1 className='text-center fw-bold' style={{ color: "var(--text-primary) !important" }}>How does it work?</h1>
          <div className="steps d-flex flex-column gap-4 align-self-center  ">
            <div className="step step-1 d-flex flex-column align-items-center mb-3">
              <div className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                <span className='fw-bolder'>1</span>
              </div>
              <h3 className='my-3'>Get a Price quote</h3>
              <span className=' text-center position-relative'>
                <p className='m-0'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className='m-0'> adipisicing elit.</p>
                <img className='arc-left position-absolute' src="/images/arc-left.png" alt="arc" />
              </span>

            </div>
            <div className="step step-2 d-flex flex-column align-items-center mb-3">
              <div className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                <span className='fw-bolder'>2</span>
              </div>
              <h3 className='my-3'>Payments</h3>
              <span className='text-center position-relative'>
                <p className='m-0'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className='m-0'> adipisicing elit.</p>
                <img className='arc-right position-absolute' src="/images/arc-right.png" alt="arc" />
              </span>

            </div>
            <div className="step step-3 d-flex flex-column align-items-center mb-3">
              <div className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                <span className='fw-bolder'>3</span>
              </div>
              <h3 className='my-3'>Shipment and Delivery</h3>
              <span className=' text-center position-relative'>
                <p className='m-0'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className='m-0'> adipisicing elit.</p>
                <img className='arc-left position-absolute' src="/images/arc-left.png" alt="arc" />
              </span>

            </div>
            <div className="step step-4 d-flex flex-column align-items-center mb-3">
              <div className="rounded-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                <span className='fw-bolder'>1</span>
              </div>
              <h3 className='my-3'>Get the vehicle safe</h3>
              <span className='text-center position-relative'>
                <p className='m-0'>Lorem ipsum dolor sit amet, consectetur</p>
                <p className='m-0'> adipisicing elit.</p>
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* <div className='container'>
         <div className="box box1">

         </div>
         <div className="box box2">

         </div>

  </div> */}
    </>
  )
}

export default App
