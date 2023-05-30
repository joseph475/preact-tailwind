
import { h, Component } from 'preact';
import style from './style.css';


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
            <ul>
              {data.map(item => (
                <li key={item.id}>{item.name}--{item.description}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }
  }
  
export default Home;