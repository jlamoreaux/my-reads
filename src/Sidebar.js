import { Component } from 'react';
import SidebarButton from './SidebarButton';


class Sidebar extends Component {
  render() {
    const categories = [...this.props.categories];
    return (
      <nav className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <SidebarButton category='All' />
          </li>
          {categories.map((category) => (
            <li className="sidebar-list-item" key={category}>
              <SidebarButton category={category} />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Sidebar