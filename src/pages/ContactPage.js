const ContactPage = () => {
      return (
            <>
                  <div class="row row-content">
                        <div class="col-sm-4">
                              <h3>Contact us</h3>
                              <a role="button" class="btn btn-link nav-red" href="#"><i class="fa fa-phone"></i> 1-111-111-1111</a> <br />
                              <a role="button" class="btn btn-link nav-red" href="#"><i class="fa fa-envelope-o"></i> Snoopys@business.co</a><br />
                              <br />
                        </div>
                        <div class="col-sm-4">
                              <h3>Our Address</h3>
                              <address>123 Real Street <br />Real City, NC 11111 <br />U.S.A.</address>
                        </div>
                  </div>

                  <div class="row row-content">
                        <div class="col-4">
                              <h3>Your Feedback</h3>
                        </div>
                        <div class="col-md-8">
                              <form>
                                    <form>
                                          <div class="form-group row">
                                                <div class="col offset-md-2">
                                                      <p>Rate us 1-5</p>
                                                      <div class="form-check form-check-inline">
                                                            <input type="radio" class="form-check-input" id="rateOne" name="rateRadios" value="one" />
                                                            <label for="rateOne" class="form-check-label">1</label>
                                                      </div>
                                                      <div class="form-check form-check-inline">
                                                            <input type="radio" class="form-check-input" id="rateTwo" name="rateRadios" value="two" />
                                                            <label for="rateTwo" class="form-check-label">2</label>
                                                      </div>
                                                      <div class="form-check form-check-inline">
                                                            <input type="radio" class="form-check-input" id="rateThree" name="rateRadios" value="three" />
                                                            <label for="rateThree" class="form-check-label">3</label>
                                                      </div>
                                                      <div class="form-check form-check-inline">
                                                            <input type="radio" class="form-check-input" id="rateFour" name="rateRadios" value="four" />
                                                            <label for="rateFour" class="form-check-label">4</label>
                                                      </div>
                                                      <div class="form-check form-check-inline">
                                                            <input type="radio" class="form-check-input" id="rateFive" name="rateRadios" value="five" />
                                                            <label for="rateFive" class="form-check-label">5</label>
                                                      </div>
                                                </div>
                                          </div>
                                    </form>
                                    <form>
                                          <div class="form-group row">
                                                <div class="col offset-md-2">
                                                      <label for="feedback">Your Feedback</label>
                                                      <div class="col-md-10">
                                                            <textarea class="form-control" id="feedback" name="feedback" rows="10"></textarea>
                                                      </div>
                                                      <div class="col">
                                                            <br />
                                                            <button type="submit" class="btn btn-danger">Send Feedback</button>
                                                      </div>
                                                </div>
                                          </div>
                                    </form>
                              </form>
                        </div>
                  </div>
            </>
      );
};

export default ContactPage;