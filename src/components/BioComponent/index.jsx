import React from "react";
import "../../css/styles.css";
import data from "./Bio.json";
import parse from 'html-react-parser';
import { getBadgeColor} from "../../utility";

const Bio = () => {
  return (
    <div>
      <div className="row alignBaseline">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <p className="headingFontSize">Education</p>
          {data["education"].map((d,  index) => {
            return (
              <div className="d-flex flex-row eduElementPadding" key={index}>
                <div className="logoImagePadding">
                  <img src={`${d.imageUrl}`} alt="" height="80px" width="200px" />
                </div>
                <div className="d-flex flex-column">
                  <span>
                    <span className="contentPadding">{parse(d.collegeName)}</span>
                    <div className="badge rounded-pill dateColor p-1">{d.year}</div>
                  </span>
                  <span>{d.description}</span>
                  {d.department && (
                    <span>Department: {parse(d.department)}</span>
                  )}
                  {d.supervisor && (
                    <span>Supervisor: {parse(d.supervisor)}</span>
                  )}
                  {d.thesisTitle && (
                    <span>
                      <span>Thesis: {parse(d.thesisTitle)}</span>
                      {/* <a href="#/publications/#thesis" target="_self" rel="noopener noreferrer" className="badgePadding"><span className="badge rounded-pill" style={{ backgroundColor: getBadgeColor("weblink") }}>thesis</span></a> */}
                    </span>
                  )}
                  {d.major && (
                    <span>Major: {d.major}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row alignBaseline">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <p className="headingFontSize">Experience</p>
          {data["experience"].map((d, index) => {
            return (
              <div className="d-flex flex-row eduElementPadding" key={index}>
                <div className="logoImagePadding">
                  <img src={`${d.imageUrl}`} alt="" height="80px" width="200px" />
                </div>
                <div className="d-flex flex-column">
                  <span>
                    <span className="contentPadding">{d.title}</span>
                    <div className="badge rounded-pill dateColor p-1">{d.year}</div>
                  </span>
                  <span>{parse(d.collegeName)}</span>
                  {d.project && (
                    <span>Project: {d.project}</span>
                  )}
                  {d.supervisor && (
                    <span>Supervisor: {parse(d.supervisor)}</span>
                  )}
                  {d.mentor && (
                    <span>Mentors: {parse(d.mentor)}</span>
                  )}
                  {d.courseInstructor && (
                    <span>Course Instructors: {parse(d.courseInstructor)}</span>
                  )}
                  <span>{d.place}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row alignBaseline">
        <div className="col-md-2">
          <hr className="headingBar col-md-8" />
        </div>
        <div className="col-md-10">
          <p className="headingFontSize">Professional Service</p>
          <ul>
            {data.professionalService.map((d, index) => {
              return (
                <li key={index}>{d.title}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bio;