import React from "react";
import "../css/styles.css";
import NewsComponent from "./NewsComponent";

const Home = () => {
  return (
    <div className="row col-12 p-0 m-0">
      <div className="col-md-4 col-xxl-3"><img src={process.env.PUBLIC_URL + '/images/profile.png'} alt="" width="185px" height="250px" /></div>
      <div className="d-flex flex-column col-md-8 col-xxl-6">
        <span className="profileName">Chencheng Fang</span>
        <span className="profileDesc">Ph.D. Candidate,</span>
        <span className="profileDesc">Institute of Finance and Statistics,</span>
        <span className="profileDesc">Universität Bonn</span>
        <a href="https://maps.app.goo.gl/2RqH6Yobh8EKgV439" target="_blank" className="addressTag" rel="noopener noreferrer">Adenauerallee 24-26, 53113 Bonn</a>
        <div className="fa-2xl socialMediaLinks">
          <a href="mailto:ccfang@uni-bonn.de"><button type="button" className="btn btn-primary buttonLineHeight gmailColor">email me</button></a>
          <a href="https://github.com/ccfang2" target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight githubColor">github</button></a>
          <a href="https://twitter.com/ccfang819" target="_blank" rel="noopener noreferrer" className="paddingLeft10"><button type="button" className="btn btn-primary buttonLineHeight twitterColor">twitter</button></a>
        </div>
      </div>
      <div className="row sectionContainer">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <div className="headingFontSize">About Me</div>
          <p className="contentFontSize">
            <div className="m-0">
              <p>
              Welcome to my website, I am Chencheng, a third year Ph.D. candidate at the <a href="https://www.econ.uni-bonn.de/ifs/en/" target="_blank" rel="noopener noreferrer">Institute of Finance and Statistics</a>, <a href="https://www.uni-bonn.de/" target="_blank" rel="noopener noreferrer">Universität Bonn</a> in Germany,
              where I am supervised by Prof. <a href="https://www.dliebl.com/" target="_blank" rel="noopener noreferrer">Dominik Liebl</a>. I am currectly passionate about doing research in Econometrics & Statistics, causal inference and functional data analysis. I also find great enthusiasm in publishing R-packages along with my researches. </p>
              <p>  
              Prior to joining Universität Bonn, I had some experience of empirical analysis in Management Information Systems (MIS) at <a href="https://www.tongji.edu.cn/eng/" target="_blank" rel="noopener noreferrer">Tongji University</a>, when I often applied Econometric methods on real datasets. It was during that time that I gained a strong interest in theoretical Econometrics and hope to make contribution to the academia of Econometrics by 
              developing theoretical models to deal with the growing challenges in empirical research.</p>
            </div>
          </p>
        </div>
      </div>
      <div className="row alignBaseline">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <div className="headingFontSize">Research Interests</div>
          <p className="contentFontSize">Econometrics; Causal Inference; Functional Data Analysis</p>
        </div>
      </div>
      <NewsComponent />
    </div>
  );
};

export default Home;