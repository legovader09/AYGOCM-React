import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { ContentContext } from './ContentContext';
import '../../css/cookie.css';

const Consent = () => (
  <ContentContext.Consumer>
    {(content) => (
      <CookieConsent
        disableButtonStyles
        cookieSecurity
        enableDeclineButton
        flipButtons
        sameSite="strict"
        location="bottom"
        cookieName="CONSENT"
        style={{ background: 'var(--darkgrey)' }}
        buttonText={content.Strings.Consent.AcceptText}
        declineButtonText={content.Strings.Consent.DeclineText}
        expires={30}
        buttonClasses="btn btn-primary"
        declineButtonClasses="btn btn-light m-1"
        containerClasses="slide-up"
        buttonWrapperClasses="m-2"
      >
        {content.Strings.Consent.Message}
      </CookieConsent>
    )}
  </ContentContext.Consumer>
);

export default Consent;
