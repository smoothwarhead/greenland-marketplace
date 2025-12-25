import React from "react";
import "./landing-page.scss";
import { faqItems, landingProducts } from "../../utils/data";
import { Link } from "react-router-dom";




const LandingPage = () => {
  const handleBecomeAgent = () => {
    // Replace with your route/navigation
    alert("Navigate to: /agent/register");
  };

  const handleSignIn = () => {
    // Replace with your route/navigation
    alert("Navigate to: /agent/login");
  };

  return (
    <div className="marketplace-landing">
      {/* Hero Section */}
      <header className="marketplace-hero">

        <div className="marketplace-hero__content">
          <div className="marketplace-hero__badge">
            <span className="dot" />
            Commission Marketplace
          </div>
          <h1>
            Earn commissions by marketing{" "}
            <span>trusted products</span>.
          </h1>
          <p>
            Pick any product from our marketplace, find a buyer,
            and get paid every time a sale is completed. No capital,
            no inventory – just your contact list and hustle.
          </p>

          <div className="marketplace-hero__actions">
            <Link
              className="btn btn--primary"
              to="/account/become-an-agent"
            >
              Become an Agent
            </Link>

            <Link
              className="btn btn--ghost"
              to="/account/sign-in-as-agent"
            >
              Sign in as Agent
            </Link>
          </div>

          <div className="marketplace-hero__meta">
            <div>
              <span className="meta-label">
                Starting commission
              </span>
              <span className="meta-value">Up to ₦15,000</span>
            </div>
            <div>
              <span className="meta-label">Payout method</span>
              <span className="meta-value">
                Direct bank transfer
              </span>
            </div>
            <div>
              <span className="meta-label">Fees</span>
              <span className="meta-value">Free to join</span>
            </div>
          </div>


        </div>

        <div className="marketplace-hero__card">
          <div className="hero-card__header">
            <span>Sample Earnings</span>
          </div>
          <div className="hero-card__body">
            <div className="hero-earning">
              <div>
                <p className="hero-earning__label">
                  Last week commission
                </p>
                <p className="hero-earning__value">₦42,000</p>
              </div>
              <span className="hero-earning__tag">
                5 closed sales
              </span>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat__label">
                  Average per sale
                </span>
                <span className="hero-stat__value">₦8,400</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__label">
                  Active agents
                </span>
                <span className="hero-stat__value">247</span>
              </div>
            </div>

            <div className="hero-bar">
              <div className="hero-bar__fill" />
            </div>

            <p className="hero-card__note">
              These are sample numbers. Your actual earnings depend
              on the number of buyers you close.
            </p>
          </div>

        </div>


      </header>

      {/* How It Works */}
      <section className="marketplace-section marketplace-section--muted">
        <div className="section-header">
          <h2>How it works</h2>
          <p>
            We handle stock, logistics, and payment. You focus on
            connecting buyers to products.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-card__badge">Step 1</div>
            <h3>Create your free agent account</h3>
            <p>
              Sign up once, verify your phone and bank details, and
              get access to the marketplace dashboard.
            </p>
          </div>
          <div className="step-card">
            <div className="step-card__badge">Step 2</div>
            <h3>Choose products & find buyers</h3>
            <p>
              Browse products, check commission per item, then share
              links or pitch to your existing contacts offline.
            </p>
          </div>
          <div className="step-card">
            <div className="step-card__badge">Step 3</div>
            <h3>We close & deliver, you earn</h3>
            <p>
              Once the buyer pays and confirms, we credit your wallet
              and you can request a payout instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="marketplace-section">
        <div className="section-header">
          <h2>Why agents love our marketplace</h2>
          <p>
            Build extra income around your schedule without renting a
            shop or buying stock upfront.
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>No capital needed</h3>
            <p>
              You don’t buy products. You only connect ready buyers
              to us and get paid when the sale is confirmed.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Fast payouts</h3>
            <p>
              Commissions hit your wallet as soon as the buyer’s
              payment clears. Withdraw directly to your bank account.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Quality products</h3>
            <p>
              Promote products that are in stock, trusted, and
              already selling well in the market.
            </p>
          </div>
          <div className="benefit-card">
            <h3>Simple dashboard</h3>
            <p>
              Track leads, closed deals, and your earnings in one
              clean interface built for agents.
            </p>
          </div>
        </div>
      </section>

      {/* Product Teaser */}
      <section className="marketplace-section marketplace-section--muted">
        <div className="section-header">
          <h2>Products you can market</h2>
          <p>
            These are examples. Inside the dashboard, you’ll see the
            full catalog with real-time commission rates.
          </p>
        </div>

        <div className="products-row">
          {landingProducts.map((p) => (
            <div className="product-teaser" key={p.id}>
              <div className="product-teaser__badge">
                Popular
              </div>
              <h3>{p.name}</h3>
              <p className="product-teaser__price">
                Price: <span>₦{p.price.toLocaleString()}</span>
              </p>
              <p className="product-teaser__commission">
                Minimum Commission:{" "}
                <strong>
                  ₦{p.commission.toLocaleString()}
                </strong>
              </p>
           
              <Link
                className="btn btn--outline"
                to="/account/become-an-agent"                
              >
                Start marketing this
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="marketplace-section">
        <div className="section-header">
          <h2>Frequently asked questions</h2>
          <p>
            Still unsure? Here are answers to the most common
            questions from new agents.
          </p>
        </div>

        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="marketplace-cta">
        <div className="marketplace-cta__content">
          <h2>Ready to start earning</h2>
          <p>
            Create your free agent account today and start marketing
            products within minutes.
          </p>
        </div>
        <div className="marketplace-cta__actions">
          <Link
            className="btn btn--outline"
            to="/account/become-an-agent"

          >
            Get started now
          </Link>
          <Link
            className="btn btn--ghost"
            to="/account/sign-in-as-agent"
          >
            I already have an account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="marketplace-footer">
        <p>© {new Date().getFullYear()} YourStore Marketplace</p>
        <div className="marketplace-footer__links">
          <a href="#!">Agent Terms</a>
          <a href="#!">Privacy</a>
          <a href="#!">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
