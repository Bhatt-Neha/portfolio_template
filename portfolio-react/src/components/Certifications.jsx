import React from 'react';
import { config } from '../config';

const Certifications = () => {
  const getCertificationIcon = (issuer) => {
    const icons = {
      'Amazon Web Services': 'fab fa-aws',
      'Microsoft': 'fab fa-microsoft',
      'Google': 'fab fa-google',
      'LinkedIn': 'fab fa-linkedin',
      'Simplilearn': 'fas fa-graduation-cap'
    };
    return icons[issuer] || 'fas fa-certificate';
  };

  return (
    <section id="certifications" className="certifications">
      <div className="section-header">
        <h1 className="section-title">CERTIFICATIONS</h1>
        <div className="title-underline"></div>
      </div>
      <div className="certifications-grid">
        {config.certifications.map((cert) => (
          <div 
            key={cert.name}
            className="certification-card"
          >
            <div className="certification-content">
              <h3 className="certification-title">{cert.name}</h3>
              <div className="certification-issuer">
                <i className={getCertificationIcon(cert.issuer)}></i>
                {cert.issuer}
              </div>
              <div className="certification-description">
                {cert.description}
              </div>
              <div className="certification-date">
                <i className="far fa-calendar-alt"></i>
                Issued: {cert.date}
              </div>
            </div>
            <div className="certification-icon">
              <i className={getCertificationIcon(cert.issuer)}></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
