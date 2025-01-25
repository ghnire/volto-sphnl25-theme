import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalLink, Component } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import FormattedDate from '@plone/volto/components/theme/FormattedDate/FormattedDate';

import { isInternalURL } from '@plone/volto/helpers/Url/Url';
import calendarSVG from '@plone/volto/icons/calendar.svg';
import clockSVG from '@plone/volto/icons/clock.svg';
import worldSVG from '@plone/volto/icons/map.svg';
import { Icon } from '@plone/volto/components';

const PlannerTemplate = ({ items, linkTitle, linkHref, isEditMode }) => {
  let link = null;
  let href = linkHref?.[0]?.['@id'] || '';
  const dateFormat = {
    month: 'numeric',
    day: 'numeric',
  };
  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
  };
  const localeString = 'nl';

  if (isInternalURL(href)) {
    link = (
      <ConditionalLink to={flattenToAppURL(href)} condition={!isEditMode}>
        {linkTitle || href}
      </ConditionalLink>
    );
  } else if (href) {
    link = <a href={href}>{linkTitle || href}</a>;
  }

  return (
    <>
      <div className="items">
        {items.map((item) => (
          <div className="listing-item" key={item['@id']}>
            <ConditionalLink item={item} condition={!isEditMode}>
              <div className="listing-body">
                <div>
                  <p className="listing-event-whenwhere">
                    <div className="le-ww-container">
                      <div className="le-ww-row">
                        <div className="le-ww-column">
                          <Icon name={calendarSVG} size="24px" />
                          <div>
                            <span nowrap>
                              <FormattedDate
                                date={item.start}
                                format={dateFormat}
                                locale={localeString}
                              />
                            </span>
                          </div>
                        </div>
                        <div className="le-ww-column">
                          <Icon name={clockSVG} size="24px" />
                          <div>
                            <span nowrap>
                              <FormattedDate
                                date={item.start}
                                format={timeFormat}
                                locale={localeString}
                              />
                              {'-'}
                              <FormattedDate
                                date={item.end}
                                format={timeFormat}
                                locale={localeString}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="le-ww-row">
                        <div className="le-ww-column">
                          <Icon name={worldSVG} size="24px" />
                          <div>
                            <span nowrap>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
                <h3>{item.title ? item.title : item.id}</h3>
                <span className="dontwrap">{item.description}</span>
              </div>
            </ConditionalLink>
          </div>
        ))}
      </div>

      {link && <div className="footer">{link}</div>}
    </>
  );
};

PlannerTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default PlannerTemplate;
