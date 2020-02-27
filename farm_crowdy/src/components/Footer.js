import React from 'react'

 function Footer() {
    return (
        <div>
           <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="widget">
              <h5 className="widgetheading">Browse pages</h5>
              <ul className="link-list">
                <li><a href="#">Our company</a></li>
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Press release</a></li>
                <li><a href="#">What we have done</a></li>
                <li><a href="#">Our support forum</a></li>
              </ul>

            </div>
          </div>
          <div className="col-md-4">
            <div className="widget">
              <h5 className="widgetheading">Get in touch</h5>
              <address>
							<strong>Eterna company Inc.</strong><br/>
							Somestreet 200 VW, Suite Village A.001<br/>
							Jakarta 13426 Indonesia
						</address>
              <p>
                <i class="icon-phone"></i> (123) 456-7890 - (123) 555-7891 <br/>
                <i class="icon-envelope-alt"></i> email@domainname.com
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget">
              <h5 className="widgetheading">Subscribe newsletter</h5>
              <p>
                Keep updated for new releases and freebies. Enter your e-mail and subscribe to our newsletter.
              </p>
              <form className="subscribe">
                <div className="input-append">
                  <input className="span2" id="appendedInputButton" type="text"/>
                  <button className="btn btn-theme" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="span6">
              <div className="copyright">
                <p><span>&copy; Eterna company. All right reserved</span></p>
              </div>

            </div>

            <div className="span6">
              <div className="credits">
             
                Designed by <a href="#">Kehdcode</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer;