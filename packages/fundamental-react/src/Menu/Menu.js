import React from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------- Menu ------------------------------------------

export const MenuContext = React.createContext({ state: {}, onClick: () => {} });
export class Menu extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    defaultSelectedKeys: PropTypes.array
  };

  constructor(props) {
    super(props);
    const { defaultSelectedKeys = [] } = props;
    this.state = {
      selectedKeys: defaultSelectedKeys
    };
  }

  handleClick = (key, e) => {
    const { onClick } = this.props;
    const { selectedKeys } = this.state;
    const originSelectedKeys = selectedKeys.slice();

    if (selectedKeys.some(sk => sk === key)) {
      selectedKeys.splice(selectedKeys.indexOf(key), 1);
    } else {
      selectedKeys.push(key);
    }

    this.setState({ selectedKeys });

    if (onClick) {
      onClick(key, originSelectedKeys, e);
    }
  };

  render() {
    const { children, className, onClick, defaultSelectedKeys, ...restProps } = this.props;
    return (
      <MenuContext.Provider value={{ menuState: this.state, onClick: this.handleClick }}>
        <nav className={className} {...restProps}>
          <MenuList>{children}</MenuList>
        </nav>
      </MenuContext.Provider>
    );
  }
}

// ---------------------------------------- Menu List ----------------------------------------
export const MenuList = ({ children, className }) => (
  <MenuContext.Consumer>
    {({ menuState: { selectedKeys } }) => (
      <ul className={`fd-menu__list${className ? ` ${className}` : ''}`}>
        {React.Children.map(children, item => {
          const itemkey = item.key;
          const selected = selectedKeys.some(sk => sk === item.key);
          return React.cloneElement(item, { itemkey, selected });
        })}
      </ul>
    )}
  </MenuContext.Consumer>
);
// ---------------------------------------- Menu Group ----------------------------------------
export const MenuGroup = ({ title, children, className, ...props }) => (
  <div className={`fd-menu__group${className ? ` ${className}` : ''}`} {...props}>
    <div className="fd-menu__title">{title}</div>
    <MenuList>{children}</MenuList>
  </div>
);

MenuGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

// export const MenuItem = ({ key, selected, separator, children, className, ...props }) => {
//   return (
//     <MenuContext.Consumer>
//       {({ onClick }) => (
//         <React.Fragment>
//           <li
//             className={className}
//             {...props}
//             onClick={e => {
//               onClick(key, e);
//             }}
//             key={key}
//           >
//             {<div className="fd-menu__addon-before">{selected ? <span className="sap-icon--accept" /> : null}</div>}
//             {<span className="fd-menu__item">{children}</span>}
//           </li>
//           {separator && <hr />}
//         </React.Fragment>
//       )}
//     </MenuContext.Consumer>
//   );
// };
