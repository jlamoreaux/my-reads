import { Component } from 'react';
import { Link } from 'react-router-dom';

class SidebarButton extends Component {
  render() {
    const category = this.props.category
    const slug = category.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    return (
      <Link className="sidebar-button" to={`/${slug}`}>
        {category.split(/(?=[A-Z])/).join(' ').toLowerCase()}
      </Link>
    );
  }
}

export default SidebarButton