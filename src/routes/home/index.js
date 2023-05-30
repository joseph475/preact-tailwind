
import { h, Component } from 'preact';
import style from './style.css';
import Card from '../../components/cards';
import Search from '../../components/search';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loading: true,
            error: null,
            searchResults: [],
            json_api: '././json_data/products.json'
        };
    }
    handleSearch = (event) => {
        // console.log('Search value:', searchValue);
        const searchValue = event.target.value;
        this.setState({ searchQuery: searchValue });
    };

    componentDidMount() {
        fetch(this.state.json_api)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data,
                    searchResults: data,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    error,
                    loading: false
                });
            });
    }
    
    setSearchResults = (results) => {
        this.setState({ searchResults: results });
    };

    render() {
        const { data, loading, error, searchResults } = this.state;
  
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            
            <div>
                <Search data={this.state.data} setSearchResults={this.setSearchResults} />
                {data && (
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {searchResults.map(item => (
                                <Card
                                   data={item}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Home;