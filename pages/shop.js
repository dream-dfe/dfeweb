import React from 'react'
import Head from 'next/head'


const Shop = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Head>
              <title>DFE | Shop</title>
            </Head>
            
            <div style={{ width: '90%', margin: '2rem auto' }}> 
            <h1> Shop</h1>


            <div className="container">
    <h3 className="h3"> Tech Products </h3>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
                <div className="product-image5">
                    <a href="#">
                        <img className="pic-1" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093876/disp2_yir0qd.jpg"/>
                        <img className="pic-2" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093876/display1_koh5tj.jpg"/>
                    </a>
                    <ul className="social">
                        <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" className="select-options"><i className="fa fa-arrow-right"></i> Coming Soon</a>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Monitor Displays</a></h3>
                    <div className="price">R0</div>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
                <div className="product-image5">
                    <a href="#">
                        <img className="pic-1" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093959/proje_zgt4sh.jpg"/>
                        <img className="pic-2" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093875/proj2_qhz0rb.jpg"/>
                    </a>
                    <ul className="social">
                        <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" className="select-options"><i className="fa fa-arrow-right"></i> Coming Soon</a>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Projectors</a></h3>
                    <div className="price">R0</div>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
                <div className="product-image5">
                    <a href="#">
                        <img className="pic-1" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093459/chrome2_fiamyb.jpg"/>
                        <img className="pic-2" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093459/chrome1_xnx9zf.png"/>
                    </a>
                    <ul className="social">
                        <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" className="select-options"><i className="fa fa-arrow-right"></i> Coming Soon</a>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Chrome Devices</a></h3>
                    <div className="price">R0</div>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
                <div className="product-image5">
                    <a href="#">
                        <img className="pic-1" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093459/Ac1_m2emro.jpg"/>
                        <img className="pic-2" src="https://res.cloudinary.com/dfenterprise01/image/upload/v1614093482/ac2_cldhi6.jpg"/>
                    </a>
                    <ul className="social">
                        <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" className="select-options"><i className="fa fa-arrow-right"></i> Coming Soon</a>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Access Points</a></h3>
                    <div className="price">R0</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='text-center shop-coming-soon'> 
    <h2> <strong> Coming Soon !</strong></h2>
</div>





























            </div>
        </div>
    )
}


export default Shop