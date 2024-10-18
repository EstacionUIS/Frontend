import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

// Tabs format
import 'react-tabs/style/react-tabs.css';

// Components
import Station from './components/station';
import Observations from './components/observations';
import Information from './components/information';
import Contact from './components/contact';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className="container">
            <header className="bg-light p-3"> {/* Header bar */}
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-end"> {/* Align language selection to the right */}
                        <select
                            className="form-select mt-3"
                            value={i18n.language}
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                    </div>
                </div>
            </header>

            <main> {/* Main content area */}
                <Station /> {/* Always visible information */}

                <div className="mt-4"> {/* Add some spacing */}
                    <Tabs>
                        <TabList className="nav nav-tabs"> {/* Use Bootstrap nav-tabs class */}
                            <Tab className="nav-item nav-link">{t('Observations')}</Tab> {/* Use Bootstrap nav-item and nav-link classes */}
                            <Tab className="nav-item nav-link">{t('Information')}</Tab>
                            <Tab className="nav-item nav-link">{t('Contact')}</Tab>
                        </TabList>

                        <TabPanel>
                            <Observations />
                        </TabPanel>
                        <TabPanel>
                            <Information />
                        </TabPanel>
                        <TabPanel>
                            {/* Contact component is always visible, so no need to include it in the tabs */}
                        </TabPanel>
                    </Tabs>
                </div>
            </main>

            <footer className="bg-light p-3 mt-4"> {/* Footer with Contact component */}
                <Contact />
            </footer>
        </div>
    );
}

export default App;
