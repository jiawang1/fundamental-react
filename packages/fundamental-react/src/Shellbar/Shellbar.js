import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Popover } from '../Popover/Popover';
import { Menu, MenuItem } from '../Menu';
import { Identifier } from '../Identifier/Identifier';
import { Icon } from '../Icon/Icon';
import { SearchInput } from '../SearchInput/SearchInput';
import { Counter } from '../Badge/Badge';

export class Shellbar extends Component {
  static propTypes = {
    copilot: PropTypes.bool,
    actions: PropTypes.func
  };

  static defaultProps = {
    actions: []
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsedActions: this.getCollapsedActions(),
      totalNotifications: this.getNotificationsSum(),
      showCollapsedProductSwitcherMenu: false
    };
  }

  backBtnHandler = () => {
    this.setState({
      showCollapsedProductSwitcherMenu: false
    });
  };

  getCollapsedActions = () => {
    let collapsedList = [];

    // put all the Additional Actions in the list
    if (this.props.actions) {
      collapsedList = [...this.props.actions];
    }

    // Add the notification icon to the notifications object and add it to the list
    // The notifications are placed after the additional actions

    if (this.props.notifications) {
      const collapsedNotifications = this.props.notifications;
      collapsedNotifications.glyph = 'bell';
      collapsedList.push(collapsedNotifications);
    }

    // Add the grid icon to the product switcher object and add it to the list
    // The product switcher is placed after the notifications

    if (this.props.productSwitcher) {
      const collapsedProductSwitcher = this.props.productSwitcher;

      collapsedProductSwitcher.glyph = 'grid';
      collapsedProductSwitcher.callback = () => {
        this.setState(prevState => ({
          showCollapsedProductSwitcherMenu: !prevState.showCollapsedProductSwitcherMenu
        }));
      };

      collapsedList.push(collapsedProductSwitcher);
    }

    // Add the search icon to the search input object and add it to the list
    // The search input is placed at the beginning of the list
    if (this.props.searchInput) {
      const collapsedSearchInput = this.props.searchInput;
      collapsedSearchInput.glyph = 'search';
      collapsedList.unshift(collapsedSearchInput);
    }
    return collapsedList;
  };

  getNotificationsSum = () => {
    let additionalActionsSum = 0;
    if (this.props.actions) {
      additionalActionsSum = this.props.actions.reduce((r, d) => r + d.notificationCount, 0);
    }
    if (this.props.notifications) {
      if (this.props.notifications.notificationCount) {
        const totalSum = additionalActionsSum + this.props.notifications.notificationCount;
        return totalSum;
      }
    }
    return additionalActionsSum;
  };

  render() {
    const {
      logo,
      logoSAP,
      productTitle,
      productMenu,
      subtitle,
      copilot,
      searchInput,
      actions,
      notifications,
      productSwitcher,
      productSwitcherList,
      profile,
      profileMenu,
      className
    } = this.props;
    return (
      <div className={`fd-shellbar${className ? ` className` : ''}`}>
        <div className="fd-shellbar__group fd-shellbar__group--start">
          {logo && (
            <a className="fd-shellbar__logo" href="/#">
              {logo}
            </a>
          )}
          {logoSAP && (
            <a className="fd-shellbar__logo" href="/#">
              <img src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png" alt="SAP" />
            </a>
          )}
          <div className="fd-shellbar__product">
            {productTitle && !productMenu && <span className="fd-shellbar__title">{productTitle}</span>}
            {productMenu && (
              <div className="fd-product-menu">
                <Popover
                  alignment="right"
                  control={
                    <button className="fd-product-menu__control" type="button">
                      <span className="fd-shellbar__title fd-product-menu__title">{productTitle}</span>
                    </button>
                  }
                  body={
                    productMenu && (
                      <Menu>
                        {productMenu.map((item, index) => (
                          <MenuItem onClick={item.callback} url={item.url} link={item.link} key={index}>
                            {item.glyph && (
                              <React.Fragment>
                                <Icon glyph={item.glyph} size={item.size} />
                                &nbsp;&nbsp;&nbsp;
                              </React.Fragment>
                            )}
                            {item.name}
                          </MenuItem>
                        ))}
                      </Menu>
                    )
                  }
                />
              </div>
            )}
          </div>
          {subtitle && <div className="fd-shellbar__subtitle">{subtitle}</div>}
        </div>
        {copilot ? (
          <div className="fd-shellbar__group fd-shellbar__group--middle">
            <img src="//unpkg.com/fiori-fundamentals/dist/images/copilot.png" alt="CoPilot" height="30" width="30" />
          </div>
        ) : null}
        <div className="fd-shellbar__group fd-shellbar__group--end">
          <div className="fd-shellbar__actions">
            {searchInput && (
              <div className="fd-shellbar__action fd-shellbar__action--collapsible">
                <SearchInput inShellbar placeholder={searchInput.placeholder} searchList={searchInput.searchList} onEnter={searchInput.onSearch} />
              </div>
            )}
            {actions &&
              actions.map((action, index) => (
                <div className="fd-shellbar__action fd-shellbar__action--collapsible" key={index}>
                  {action.menu ? (
                    <Popover
                      alignment="right"
                      control={
                        <button className={` fd-button--shell sap-icon--${action.glyph}`} type="button" aria-label={action.label}>
                          {action.notificationCount > 0 && (
                            <span className="fd-counter fd-counter--notification" aria-label="Unread count">
                              {action.notificationCount}
                            </span>
                          )}
                        </button>
                      }
                      body={action.menu}
                    />
                  ) : (
                    <button type="button" className={` fd-button--shell sap-icon--${action.glyph}`} key={index} aria-label={action.label} onClick={action.callback}>
                      {action.notificationCount > 0 && (
                        <span className="fd-counter fd-counter--notification" aria-label="Unread count">
                          {action.notificationCount}
                        </span>
                      )}
                    </button>
                  )}
                </div>
              ))}
            {notifications &&
              (notifications.notificationsBody || notifications.noNotificationsBody ? (
                <Popover
                  alignment="right"
                  control={
                    <div className="fd-shellbar__action fd-shellbar__action--collapsible">
                      <button className=" fd-button--shell sap-icon--bell" aria-label="Notifications" type="button">
                        {notifications.notificationCount > 0 && (
                          <span className="fd-counter fd-counter--notification" aria-label="Unread count">
                            {notifications.notificationCount}
                          </span>
                        )}
                      </button>
                    </div>
                  }
                  body={(notifications.notificationCount > 0 && notifications.notificationsBody) || (notifications.notificationCount <= 0 && notifications.noNotificationsBody)}
                />
              ) : (
                <div className="fd-shellbar__action fd-shellbar__action--collapsible">
                  <button className=" fd-button--shell sap-icon--bell" aria-label="Notifications" onClick={notifications.callback} type="button">
                    {notifications.notificationCount > 0 && (
                      <span className="fd-counter fd-counter--notification" aria-label="Unread count">
                        {notifications.notificationCount}
                      </span>
                    )}
                  </button>
                </div>
              ))}
            {(actions || searchInput || notifications) && (
              <div className="fd-shellbar__action fd-shellbar__action--collapse">
                <div className="fd-shellbar-collapse">
                  <Popover
                    alignment="right"
                    control={
                      <div className="fd-shellbar-collapse--control" role="button">
                        <button className=" fd-button--shell sap-icon--overflow" type="button">
                          <span className="fd-counter fd-counter--notification" aria-label="Unread count">
                            {' '}
                            {this.state.totalNotifications > 0 && this.state.totalNotifications}
                          </span>
                        </button>
                      </div>
                    }
                    body={
                      <Menu>
                        {!this.state.showCollapsedProductSwitcherMenu ? (
                          this.state.collapsedActions.map((item, index) => (
                            <MenuItem onClick={item.callback} url={item.url} link={item.link} key={index}>
                              <Icon glyph={item.glyph}>{item.notificationCount > 0 && <Counter notification>{item.notificationCount}</Counter>}</Icon>
                              {item.label}
                            </MenuItem>
                          ))
                        ) : (
                          <React.Fragment>
                            <MenuItem>
                              <span className="fd-menu sap-icon--nav-back" onClick={this.backBtnHandler} role="presentation" />
                            </MenuItem>
                            {productSwitcherList.map((item, index) => (
                              <MenuItem onClick={item.callback} url={item.url} link={item.link} key={index}>
                                <Icon glyph={item.glyph} />
                                {item.title}
                              </MenuItem>
                            ))}
                          </React.Fragment>
                        )}
                      </Menu>
                    }
                  />
                </div>
              </div>
            )}
            {profile && (
              <div className="fd-shellbar__action fd-shellbar__action--show-always">
                <div className="fd-user-menu">
                  <Popover
                    alignment="right"
                    control={
                      profile.image ? (
                        <Identifier size="xs" modifier="circle" backgroundImageUrl={profile.image} />
                      ) : (
                        <Identifier size="xs" modifier="circle" color={profile.colorAccent}>
                          {profile.initials}
                        </Identifier>
                      )
                    }
                    body={
                      profileMenu && (
                        <Menu>
                          <MenuItem>{profile.userName}</MenuItem>
                          {profileMenu.map((item, index) => {
                            return (
                              <MenuItem onClick={item.callback} url={item.url} link={item.link} key={index}>
                                {item.glyph && (
                                  <React.Fragment>
                                    <Icon glyph={item.glyph} size={item.size} />
                                    &nbsp;&nbsp;&nbsp;
                                  </React.Fragment>
                                )}
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </Menu>
                      )
                    }
                  />
                </div>
              </div>
            )}
            {productSwitcher && (
              <div className="fd-shellbar__action fd-shellbar__action--collapsible">
                <div className="fd-product-switcher">
                  <Popover
                    alignment="right"
                    control={<button className=" fd-button--shell sap-icon--grid" type="button" />}
                    body={
                      <div className="fd-product-switcher__body">
                        <nav>
                          <ul>
                            {productSwitcherList.map((item, index) => (
                              <li onClick={item.callback} key={index} role="presentation">
                                <span className="fd-product-switcher__product-icon">
                                  <img src={item.image} alt={item.title} />
                                </span>
                                <span className="fd-product-switcher__product-title">{item.title}</span>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
