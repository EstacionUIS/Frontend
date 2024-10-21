import React from 'react';
import { useTranslation } from 'react-i18next';

import logo1 from '../../public/images/logo/logo1.png';
import logo2 from '../../public/images/logo/logo2.png';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <header className="bg-primary d-flex align-items-center py-3 px-4">
        <div className="container"> {/* Added container for content alignment */}
          <div className="row justify-content-between align-items-center"> {/* Row for alignment */}
            <div className="col-auto"> {/* Column for logos */}
              <img src={logo1} alt="Logo 1" className="me-3" style={{ height: '50px' }} />
              <img src={logo2} alt="Logo 2" style={{ height: '50px' }} />
            </div>
            <div className="col-auto"> {/* Column for language selector */}
              <span className="me-2 text-white">{t('Language')}:</span>
              <select
                className="form-select"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="container mt-4"> {/* Contact information */}
        <h2>{t('Contact.Title')}</h2>
        <p>{t('Contact.Text1')}</p>
        <p>{t('Contact.Text2')}</p>
        <p>{t('Contact.Text3')}</p>
      </div>

      <div className="container mt-4"> {/* Information section */}
        <h2>{t('Information.Title')}</h2>
        <p>{t('Information.Text1')}</p>
        <p>{t('Information.Text2')}</p>
      </div>
    </div>
  );
}

export default Header;
