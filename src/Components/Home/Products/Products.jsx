import React from "react";
import "./Products.css";

import StoreIcon from "../../../Assets/Products/Fulupo_store.png";
import ConsumerIcon from "../../../Assets/Products/Fulupo_consumer.png";
import DeliveryIcon from "../../../Assets/Products/Fulupo_delivery.png";
import VendorIcon from "../../../Assets/Products/Fulupo_vendor.png";
import CheckIcon from "../../../Assets/Products/Icon/Ellipse 1.ico";
import Stars from "../../../Assets/Icons/Stars.ico";

function ProductsSection() {
  return (
    <section id="products" className="products-section">

      {/* TOP BADGE */}
      <div className="top-badge">
        <img src={Stars} alt="" />
        <span>Complete AI Ecosystem</span>
      </div>

      {/* TITLE */}
      <h2 className="section-title">Four Integrated Products</h2>
      <div className="underline-products"></div>

      {/* SUBTEXT */}
      <p className="section-desc">
        Revolutionary AI-powered solutions working together to transform retail
        operations. From store management to consumer experience, delivery
        optimization to vendor relations.
      </p>

      {/* CARDS */}
      <div className="products-grid">

        {/* CARD 1 */}
        <div className="product-card">
          <div className="card-header">
            <div className="card-title-block">
              <img src={StoreIcon} className="product-img" alt="store" />
              <h3 className="product-title">Fulupo Store</h3>
            </div>
          </div>
          <p className="Paragraph-card">
            Complete store management system with AI-powered inventory,
            sales tracking, and automated purchase orders.
          </p>

          <ul>
            <li><img src={CheckIcon} alt="" /> Voice Purchase/Sale</li>
            <li><img src={CheckIcon} alt="" /> AI Inventory Management</li>
            <li><img src={CheckIcon} alt="" /> Automated Reordering</li>
            <li><img src={CheckIcon} alt="" /> Vendor Integration</li>
          </ul>

          <button className="explore-btn red">Explore Store</button>
        </div>


        {/* CARD 2 */}
        <div className="product-card">
          <div className="card-header">
            <div className="card-title-block">
              <img src={ConsumerIcon} className="product-img" alt="consumer" />
              <h3 className="product-title">Fulupo Consumer</h3>
            </div>
          </div>
          <p className="Paragraph-card">
            Smart consumer experience with voice ordering, subscriptions, and
            personalized recommendations.
          </p>
          <ul>
            <li><img src={CheckIcon} alt="" /> Voice Ordering</li>
            <li><img src={CheckIcon} alt="" /> Smart Recommendations</li>
            <li><img src={CheckIcon} alt="" /> Subscription Management</li>
            <li><img src={CheckIcon} alt="" /> Consumer Insights</li>
          </ul>

          <button className="explore-btn red">Explore Consumer</button>
        </div>


        {/* CARD 3 */}
        <div className="product-card">
          <div className="card-header">
            <div className="card-title-block">
              <img src={DeliveryIcon} className="product-img" alt="delivery" />
              <h3 className="product-title">Fulupo Delivery</h3>
            </div>
          </div>
          <p className="Paragraph-card">
            Intelligent delivery management with route optimization and
            real-time tracking for seamless logistics.
          </p>
          <ul>
            <li><img src={CheckIcon} alt="" /> Route Optimization</li>
            <li><img src={CheckIcon} alt="" /> Live Tracking</li>
            <li><img src={CheckIcon} alt="" /> Smart Dispatching</li>
            <li><img src={CheckIcon} alt="" /> Delivery Analytics</li>
          </ul>

          <button className="explore-btn red">Explore Delivery</button>
        </div>


        {/* CARD 4 */}
        <div className="product-card">
          <div className="card-header">
            <div className="card-title-block">
              <img src={VendorIcon} className="product-img" alt="vendor" />
              <h3 className="product-title">Fulupo Vendor</h3>
            </div>
          </div>
          <p className="Paragraph-card">
            Smart vendor management with automated purchase orders,
            product tracking, and integrated settlements.
          </p>
          <ul>
            <li><img src={CheckIcon} alt="" /> Auto Purchase Orders</li>
            <li><img src={CheckIcon} alt="" /> Stock Syncing</li>
            <li><img src={CheckIcon} alt="" /> Vendor Analytics</li>
            <li><img src={CheckIcon} alt="" /> Integrated Billing</li>
          </ul>

          <button className="explore-btn red">Explore Vendor</button>
        </div>

      </div>
    </section>
  );
}

export default ProductsSection;
