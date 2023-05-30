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
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            onKeyUp={handleSearch}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
    );
}
export default Search;
