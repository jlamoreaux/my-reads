import {splitWord} from '../utils/Strings';

const SidebarButton = (props) => {
  const updateCurrentShelf = () => {
    let shelf;
    if (props.shelf.toLowerCase() === 'all') {
      shelf = '';
    } else {
      shelf = props.shelf;
    }
    props.updateCurrentShelf(shelf)
  }
  return (
    <button className={`sidebar-button capitalize${props.isCurrentShelf ? 'current' : ''}`} onClick={updateCurrentShelf}>
      {splitWord(props.shelf)}
    </button>
  );
}

export default SidebarButton