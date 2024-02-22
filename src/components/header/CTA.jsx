import React from "react";
import EslamHassan_Resume from "../../assets/EslamHassan_Resume.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={EslamHassan_Resume} download>
        Download CV
      </a>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};
