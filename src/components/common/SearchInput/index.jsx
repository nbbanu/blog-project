const SearchInput = ({title}) => {
  return (
    <div className="search-area flex flec-center">
      <div className="search-area-icon">
        <i className="fa-solid fa-magnifying-glass light-text"></i>
      </div>
      <input
        type="search"
        className="search-area-input text-primary fs-14"
        placeholder={title}
      />
    </div>
  );
};

export default SearchInput;
