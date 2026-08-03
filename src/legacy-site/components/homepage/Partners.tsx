import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Partners = () => {
  return (
  <>
<section className="pt-60">
    <div className="container">
      <div className="pb-60 border-bottom">
        <div className="row">
          <div className="col-lg-6">
            <div className="pe-4">
             <div className='d-flex justify-space-around pb-4' >
             <p className="text-underline-sm fw-bold  text-muted text-uppercase">
                Our partners
              </p>
              <Link href="/company" className="btn btn-sm btn-primary d-block d-lg-none d-md-none">
              find out more
      
            </Link>
             </div>
              
              <h2 className="custom-letter-spacing-n pb-4">
                <span className="text-primary">NOVO </span>
                is operated by dedicated and experienced global leaders.
              </h2>
              <Link href="/company" className="btn btn-primary d-none d-lg-block d-md-block">
              find out more
              <i className="icon-arrows-slim-right ps-1" />
            </Link>

              {/* <p className="text-muted">
                We seek to invest in well-positioned companies with operational
                and strategic improvement potential and partner with management
                teams to create value by driving revenue and earnings growth.
              </p> */}
            </div>
          </div>
          <div className="col-lg-6">
          <div className="row">
              <div className="col-4 d-flex align-items-center" style={{minHeight:"5rem"}} >
                <Image
                  src="/assets/images/partners/SimpsonSpenceYoung.png"
                  alt="clint"
                  width={200}
                  height={80}
                  className="img-fluid"
                />
              </div>
              <div className="col-4 d-flex align-items-center" >
              <Image
                  src="/assets/images/partners/SeaProsperLimited.png"
                  alt="clint"
                  width={100}
                  height={80}
                  className="img-fluid"
                />
              </div>
              <div className="col-4 d-flex align-items-center" >
              <Image
                  src="/assets/images/partners/crossbulkshipping.png"
                  alt="clint"
                  width={100}
                  height={80}
                  className="img-fluid"
                />
              </div>
             
            </div>
                      <div className="row">
              <div className="col-4 d-flex align-items-center" style={{minHeight:"10rem"}} >
                <Image
                  src="/assets/images/partners/SkuldPNI.png"
                  alt="clint"
                  width={200}
                  height={80}
                  className="img-fluid"
                />
              </div>
              <div className="col-4 d-flex align-items-center" >
              <Image
                  src="/assets/images/partners/DBSBankSingapore.png"
                  alt="clint"
                  width={100}
                  height={80}
                  className="img-fluid"
                />
              </div>
              <div className="col-4 d-flex align-items-center" >
              <Image
                  src="/assets/images/partners/Haridass.png"
                  alt="clint"
                  width={200}
                  height={80}
                  className="img-fluid"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Partners