import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import Component from '@plone/volto/components/theme/Component/Component';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';

import { isInternalURL } from '@plone/volto/helpers/Url/Url';

const AppCompactTemplate = ({ items, linkTitle, linkHref, isEditMode }) => {
  let link = null;
  let href = linkHref?.[0]?.['@id'] || '';
  console.log(items);
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
      <div className="listing-app-items">
        <h2 className="heading">Apps</h2>
        <div className="items">
          {items.map((item) => {
            return (
              <div
                className="listing-item listing-app-compact"
                key={item['@id']}
              >
                <ConditionalLink item={item} condition={!isEditMode}>
                  <Component
                    componentName="PreviewImage"
                    item={item}
                    alt=""
                    className="listing-app-icon"
                  />
                  <div className="listing-body">
                    <span className="listing-app-title">
                      {item.title ? item.title : item.id}
                    </span>
                  </div>
                </ConditionalLink>
              </div>
            );
          })}
        </div>
      </div>

      {link && <div className="footer">{link}</div>}
    </>
  );
};

AppCompactTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default AppCompactTemplate;
