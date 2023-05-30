
import { h, Component } from 'preact';
import style from './style.css';
import Card from '../../components/cards';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        fetch('././json_data/products.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data,
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

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                {/* Render your data */}
                {data && (
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {data.map(item => (
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