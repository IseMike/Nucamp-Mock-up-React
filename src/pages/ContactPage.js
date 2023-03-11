const ContactPage = () => {
      return (
            <>
                  <div className="row row-content">
                        <div className="col-sm-4">
                              <h3>Contact us</h3>
                              <a role="button" className="btn btn-link nav-red" href="#"><i className="fa fa-phone"></i> 1-111-111-1111</a> <br />
                              <a role="button" className="btn btn-link nav-red" href="#"><i className="fa fa-envelope-o"></i> Snoopys@business.co</a><br />
                              <br />
                        </div>
                        <div className="col-sm-4">
                              <h3>Our Address</h3>
                              <address>123 Real Street <br />Real City, NC 11111 <br />U.S.A.</address>
                        </div>
                  </div>

                  <div className="row row-content">
                        <div className="col-4">
                              <h3>Your Feedback</h3>
                        </div>
                        <div className="col-md-8">
                              <div className="form-group row">
                                    <div className="col offset-md-2">
                                          <p>Rate us 1-5</p>
                                          <div className="form-check form-check-inline">
                                                <input type="radio" className="form-check-input" id="rateOne" name="rateRadios" value="one" />
                                                <label htmlFor="rateOne" className="form-check-label">1</label>
                                          </div>
                                          <div className="form-check form-check-inline">
                                                <input type="radio" className="form-check-input" id="rateTwo" name="rateRadios" value="two" />
                                                <label htmlFor="rateTwo" className="form-check-label">2</label>
                                          </div>
                                          <div className="form-check form-check-inline">
                                                <input type="radio" className="form-check-input" id="rateThree" name="rateRadios" value="three" />
                                                <label htmlFor="rateThree" className="form-check-label">3</label>
                                          </div>
                                          <div className="form-check form-check-inline">
                                                <input type="radio" className="form-check-input" id="rateFour" name="rateRadios" value="four" />
                                                <label htmlFor="rateFour" className="form-check-label">4</label>
                                          </div>
                                          <div className="form-check form-check-inline">
                                                <input type="radio" className="form-check-input" id="rateFive" name="rateRadios" value="five" />
                                                <label htmlFor="rateFive" className="form-check-label">5</label>
                                          </div>
                                    </div>
                              </div>
                              <div className="form-group row">
                                    <div className="col offset-md-2">
                                          <label htmlFor="feedback">Your Feedback</label>
                                          <div className="col-md-10">
                                                <textarea className="form-control" id="feedback" name="feedback" rows="10"></textarea>
                                          </div>
                                          <div className="col">
                                                <br />
                                                <button type="submit" className="btn btn-danger">Send Feedback</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default ContactPage;