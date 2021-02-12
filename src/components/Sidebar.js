import SidebarButton from './SidebarButton';
import Search from "./Search";

const Sidebar = (props) => {

  const updateCurrentShelf = (shelf) => {
    props.updateCurrentShelf(shelf);
  }

  return (
    <nav className="sidebar">
      <h3 className="sidebar-header">Shelves</h3>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <SidebarButton
            shelf="All"
            isCurrentShelf={!props.currentShelf}
            updateCurrentShelf={updateCurrentShelf}
          />
        </li>
        {props.shelves.length > 0 &&
          props.shelves.map((shelf) => (
            <li className="sidebar-list-item" key={shelf}>
              <SidebarButton
                shelf={shelf}
                isCurrentShelf={shelf === props.currentShelf}
                updateCurrentShelf={updateCurrentShelf}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Sidebar