import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/procomp.png)' }}>
									<div className="desc">
										<a href="https://procomp.empirichealth.com/" target="_blank">
											<div className="con">
												<h3>Procomp</h3>
												<span>Web App</span>
												{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/dpc.png)' }}>
									<div className="desc">
										<a href="https://stage-dpc.empirichealth.com/" target="_blank">
											<div className="con">
												<h3>DPC Manager</h3>
												<span>Web App</span>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/screenshot.16.png)' }}>
									<div className="desc">
										<a href="https://cstm-made.herokuapp.com/" target="_blank">
											<div className="con">
												<h3>Cstm Made</h3>
												<span>Shopping List App</span>

											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/screenshot.17.png)' }}>
									<div className="desc">
										<a href="https://jabber-jaw.herokuapp.com/" target="_blank">
											<div className="con">
												<h3>Jabber Jaw</h3>
												<span>Chat App</span>

											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/screenshot.18.png)' }}>
									<div className="desc">
										<a href="https://mikeyb2.github.io/MovieApi/" target="_blank">
											<div className="con">
												<h3>Movie Scrum</h3>
												<span>Website</span>

											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/screenshot.19.png)' }}>
									<div className="desc">
										<a href="https://mikeyb2.github.io/Travel-Agency/" target="_blank">
											<div className="con">
												<h3>Travel Site</h3>
												<span>Website</span>

											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
			</div>
		)
	}
}
