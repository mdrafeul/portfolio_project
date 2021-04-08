import React from 'react'
import {
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    FacebookShareButton
} from 'react-share'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>City Moscow Main st 2020 office +223</p>
                        </div>
                        <div className="d-flex">
                            <a herr="tel: 555-555-555">+49(960)111-1111</a>
                        </div>
                        <div className="d-flex">
                            <p>portfolio@portfolio.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" href="">Home</a> <br/>
                                <a className="footer-nav" href="">About me</a><br/>
                                <a className="footer-nav" href="">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav" href="">Experience</a><br/>
                                <a className="footer-nav" href="">Portfolio</a><br/>
                                <a className="footer-nav" href="">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com"}
                                quote={"Facebook"}
                                hashtag="#facebook"
                            >

                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://www.twiter.com"}
                                quote={"Facebook"}
                                hashtag="#facebook"
                            >

                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://www.linkedin.ocm"}
                                quote={"Facebook"}
                                hashtag="#facebook"
                            >

                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <RedditShareButton
                                url={"https://www.facebook.ocm"}
                                quote={"Facebook"}
                                hashtag="#facebook"
                            >

                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyrigh&copy;
                             {new Date().getFullYear()}&nbsp; New Horizon | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
