import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
          <div className="modal-content">
              <div className="modal-header">
                  <h4 className="modal-title">
                      FINAL SCORE 
                  </h4>
              </div>
              <div className="modal-body">
                {children}
              </div>
              <div className="modal-footer">
              <button type="button" onClick={handleClose}>
                Close
              </button>
              </div>
          </div>
        

      </section>
    </div>
  );
};

export default Modal;