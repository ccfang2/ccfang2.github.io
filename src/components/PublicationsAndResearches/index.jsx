import React from "react";
import "../../css/styles.css";
import data from "./Publications.json";
import Publication from "./Publication";
import { getBadgeColor } from "../../utility";
import { MathJax } from "better-react-mathjax";

const Publications = () => {
  return (
    <MathJax>
      <div className="row alignBaseline">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <p className="headingFontSize">Copyright Notice</p>
          <p className="contentFontSize">Copyright belongs to the publisher in case of published articles. Copyright belongs to the author or authors in all other cases.</p>
        </div>
      </div>
      <div className="row alignBaseline" id="thesis">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <p className="headingFontSize">Master's Thesis</p>
          <ul>
            <li>
              <span className="contentPadding"><em>Dimension Adaptive Estimation</em></span> 
              <span className="badge rounded-pill abstractBadge abstractMargin" data-bs-toggle="collapse" data-bs-target="#thesisAbstract" aria-expanded="false" aria-controls="thesisAbstract" style={{ backgroundColor: getBadgeColor("abstract") }}>abstract</span>             
              <a href="../media/Masters_Thesis.pdf" target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor("thesis") }}>thesis</span></a>
              <a href="https://github.com/ccfang2/Masters_Thesis" target="_blank" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor("codes") }}>codes</span></a>
              <br />
              <div className="collapse abstractContentPadding" id="thesisAbstract">
                <div className="card card-body">
                  <p>
                    This thesis proposes a dimension adaptive estimator which can achieve an optimal convergence 
                    rate across all types of underlying models, inclusive of parametric, additive and unrestricted 
                    non-parametric models. Specifically, in parametric underlying model, it converges as fast as a 
                    parametric estimator, usually at a rate of $1/n$, up to logarithmic factor. In additive and 
                    unrestricted non-parametric models, its convergence rate is slower but it still converges while 
                    parametric estimators do not converge to the true function. Hence, this estimator can perform as 
                    well as an ”oracle” estimator in all underlying true models.
                  </p>
                  <p>
                    This estimator is constructed with a two-step approach, as describe in Section 5.1. To put it simply, 
                    the first step is to generate a multivariate sieve space from original regressors; the second step 
                    is to select significant terms in the sieve by Lasso-type methods. By applying a theorem in 
                    Bunea, Tsybakov, and Wegkamp 2007, the oracle properties of the dimension adaptive estimator is 
                    established in Theorem 5.1. Also, the required lower bound of smoothness for the unknown conditional
                     mean function is different across various basis functions. This is summarised in Corollary 5.1.                  
                  </p>
                  <p>
                    The oracle properties of dimension adaptive estimator is strongly supported in the results of 
                    simulation. Furthermore, this estimator is applied in a real-life dataset about the prediction 
                    of car price. It is found that its performance is much better than an OLS linear estimator or an 
                    additive estimator in terms of out-of-sample MSE. Finally, practical suggestions are listed for 
                    researchers who are interested in using this estimator.
                  </p>
                </div>
              </div>
              <a href="/" rel="noopener noreferrer" class="nameFontColor"><strong>Chencheng Fang</strong></a><br />
             <span>Master's thesis submitted to the <a href="https://www.uni-bonn.de" target="_blank" rel="noopener noreferrer">Universität Bonn</a>. Sept 2023</span><br />
            </li>
          </ul>
        </div>
      </div>
      <Publication heading="Selected Publications" data={data.journals} getBadgeColor={getBadgeColor} />
    </MathJax>
  );
};

export default Publications;