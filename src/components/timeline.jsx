import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Empiric Health <span>2019-present</span></h2>
                        <p>As a Software Engineer my role is help design and develope full stack web applications that suit our clients needs.  I have helped design a full web app from scratch and deployed the signed off app using our CI pipeline.  I was the first Software Engineer hired by Empiric.  Now we are a team of 3 engineers.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Intern at Thinkful <span>2018-2019</span></h2>
                        <p>Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux and algorithms & data structures.  Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technology Operations Specialist at Taylor Communications <span>2017-2019</span></h2>
                        <p>Developed the Front-end UI in Angular 2 with HTML, CSS, and Javascript on a B2B platform tool. Providing front end enhancements to increase productivity and responsiveness for our CSRs.
                        This platform consumes API data from a Promotional items catalog that returns the necessary information allowing the CSRs to search for the products their customers are wanting to order. I developed the UI that populates this returned data making it accessible to the CSRs.
                        It also makes calls to our internal API to return account and billing information for the customers that are placing orders. Created the methods and services that returned this data and populated the UI.
                        This platform has increased productivity for CSRs so that they do not have to repeat processes to process orders thus delaying turn times for our customers’ orders.
                        This platform automatically produces the Purchase orders for our vendors and also inserts the data into the billing system for them allowing the CSRs more time to process additional orders.
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
