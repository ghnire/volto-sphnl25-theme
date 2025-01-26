// SemanticUI-free pre-@plone/components
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import Logo from '@plone/volto/components/theme/Logo/Logo';
import { Container } from '@plone/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers/Url/Url';
import config from '@plone/volto/registry';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  const { settings } = config;
  const { lang, siteActions = [] } = useSelector(
    (state) => ({
      lang: state.intl.locale,
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );
  const navroot = useSelector((state) => state.navroot.data.navroot);
  const footerLinks = navroot?.footer_links;
  const footerLogos = navroot?.footer_logos;

  return (
    <footer id="footer">
      <Container className="footer">
        <div className="footer-container">
          <div className="footer-message footer-element">
            <div className="footer-element-flex">
              <div className="footer-element-flex-item">
                <img
                  className="logo"
                  alt="Spark Holland logo blue"
                  src="./spark_logo_blue_svg.svg/@@images/image-386-9ea6c86bc8e402c99fb4036bf8903f6d.svg"
                />
              </div>
              <div className="footer-element-flex-item">
                <p>
                  <strong>Spark Holland B.V.</strong>
                  <br />
                  Waanderweg 40
                  <br />
                  7812HZ Emmen
                  <br />
                  The Netherlands
                </p>
                <p>
                  Phone: +31 591 631 700
                  <br />
                  E-mail: info@sparkholland.com
                </p>
                <p>KvK: 04034580</p>
              </div>
            </div>
          </div>
          <div className="footer-element">
            <ul>
              <li>
                <UniversalLink href="/nieuws-archief">
                  Nieuws archief
                </UniversalLink>
              </li>
            </ul>
          </div>
          <div className="footer-message footer-element">
            <div className="footer-element-flex">
              <p className="footer-message-sitename">
                <FormattedMessage
                  id="footer-message-sitename-id"
                  defaultMessage="{sparknet}"
                  values={{
                    sparknet: (
                      <FormattedMessage
                        id="Sparknet{reg} - Spark Holland Intranet site"
                        defaultMessage="Sparknet{reg} | Spark Holland Intranet site | {current_year}"
                        values={{
                          reg: <sup>®</sup>,
                          current_year: new Date().getFullYear(),
                        }}
                      />
                    ),
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
