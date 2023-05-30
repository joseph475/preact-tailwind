import { h } from 'preact';

const Search = ({data, setSearchResults}) => {

        const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredData = data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(filteredData);
      };
    
    return (
        <div class="flex px-3">
          <input
            type="text"
            placeholder="Search..."
            onKeyUp={handleSearch}
            class="px-4 py-2 w-50 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
    );
}
export default Search;
