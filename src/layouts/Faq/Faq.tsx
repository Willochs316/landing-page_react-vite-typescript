import Images from "@assets/images";
import "./Faq.css";

export default function Faq() {
  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="faq-header">Frequently asked questions</h2>

        <div className="faq-content">
          <div className="faq-items">
            <div className="faq-item">
              <span className="faq-title">General</span>
            </div>

            <div className="faq-descr">
              <span className="faq-descr-content">
                I want to work part-time, is that possible
              </span>
            </div>
          </div>

          <div className="faq-items">
            <div className="faq-descr">
              <span className="faq-descr-content">
                How long are the average projects?
              </span>
            </div>
          </div>

          <div className="faq-items faq-bg">
            <div className="faq-descr">
              <span className="faq-descr-content faq-bold">
                How does the payment works?
              </span>
            </div>

            <div className="yellow-zwilt">
              <img
                className="yellow-zwilt-img"
                src={Images.yellowZwilt}
                alt=""
              />
            </div>
          </div>

          <div className="faq-items">
            <div className="faq-descr">
              <span className="faq-descr-content">How much can I earn?</span>
            </div>
          </div>

          <div className="faq-items">
            <div className="faq-item faq-bg">
              <span className="faq-title">General</span>
            </div>

            <div className="faq-item-inner">
              <span className="faq-title">Joining Process</span>
            </div>

            <div className="faq-descr">
              <span className="faq-descr-content">
                I want to work part-time, is that possible
              </span>
            </div>
          </div>

          <div className="faq-items">
            <div className="faq-descr">
              <span className="faq-descr-content">
                How long are the average projects?
              </span>
            </div>
          </div>

          <div className="faq-items">
            <div className="faq-descr">
              <span className="faq-descr-content">
                How long are the average projects?
              </span>
            </div>
          </div>
          <div className="faq-items faq-item-bt">
            <div className="faq-descr">
              <span className="faq-descr-content">How much can I earn?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
