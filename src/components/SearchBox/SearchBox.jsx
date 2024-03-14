
import css from './SearchBox.module.css';

const SearchBox = ({ searchContact, setSearchContact }) => {
  const handleChange = (e) => {
    setSearchContact(e.target.value);
  };

  return (
    <div className={css.seacrchForm}>
      <p className={css.searchHeading}>Find contact by name:</p>
      <input
        className={css.searchInput}
        type="text"
        placeholder=""
        title="Type contact's name"
        value={searchContact}
        onChange={handleChange}
      />
    </div>
  );
};


export default SearchBox;