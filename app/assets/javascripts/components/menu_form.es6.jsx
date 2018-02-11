class MenuForm extends React.Component {
    constructor() {
        super();
        this.state = {date:'', name:'', isPresent: '', price: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render () {
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                <label for='date'>Date</label>
                <input type='text' name='date' value={this.state.date} onChange={this.handleChange} />
                <label for='name'>Name</label>
                <input type='text' name='name' value={this.state.menuname} onChange={this.handleChange}/>
                <label for='isPresent'>Available</label>
                <input type='text' name='isPresent' value={this.state.isPresent} onChange={this.handleChange} />
                <label for='price'>Price</label>
                <input type='text' name='price' value={this.state.price} onChange={this.handleChange} />
                <button>Submit</button>
              </form>
            </div>
        );
    }
}


