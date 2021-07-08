import React from 'react'
import './analysis.scss';

function Analysis() {
    return (
        <div className="analysis-page">
          <div className="analysis-page_section">
            <h1 className="title">Buyer Analysis</h1>
            <div className="boxex">
              <div className="boxex_box">
                <img src="/visit.png"/>
                <div>
                  <p className="number">50</p>
                  <p className="txt">Won Auction</p>
                </div>
              </div>
              <div className="boxex_box">
                <img src="/auction2.png"/>
                <div>
                  <p className="number">35</p>
                  <p className="txt">My Auctions</p>
                </div>
              </div>
              <div className="boxex_box">
                <img src="/car2.png"/>
                <div>
                  <p className="number">65</p>
                  <p className="txt">My Instant Cars</p>
                </div>
              </div>
              <div className="boxex_box">
                <img src="/Growth-icon2.png"/>
                <div>
                  <p className="number">250K EGP</p>
                  <p className="txt">Total Paid</p>
                </div>
              </div>
            </div>
            <h1 className="title">Seller Analysis</h1>
            <div className="boxex">
              <div className="boxex_box">
                <img src="/car1.png"/>
                <div>
                  <p className="number">65</p>
                  <p className="txt">Car Sold</p>
                </div>
              </div>
              <div className="boxex_box">
                <img src="/auction2.png"/>
                <div>
                  <p className="number">30</p>
                  <p className="txt">Coming On Auction</p>
                </div>
              </div>
              <div className="boxex_box">
                <img src="/car2.png"/>
                <div>
                  <p className="number">10</p>
                  <p className="txt">Instant Cars</p>
                </div>
              </div>
              <div className="boxex_box">
                <img src="/Growth-icon.png"/>
                <div>
                  <p className="number">250K EGP</p>
                  <p className="txt">Total Sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Analysis