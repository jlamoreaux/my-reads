import SidebarButton from './SidebarButton';

const Sidebar = (props) => {

  const updateCurrentShelf = (shelf) => {
    props.updateCurrentShelf(shelf);
    console.log(props);
  }

  return (
    <nav className="sidebar">
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