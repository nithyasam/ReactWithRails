class Main extends React.Component {
    constructor() {
        super();

        this.viewMenu = this.viewMenu.bind(this);
    }
    viewMenu(){
        // event.preventDefault();
        // alert("click")
        axios.get('/menu_lists').then(function(response) {
                console.log("response");
                console.log(response);
            }
        )
    }
    render () {
        return (
            <div>
                <a href='/menu_lists'><button>View Menu</button></a>
                <a href='/menu_lists/new'><button>Create Menu</button></a>
            </div>
        );
    }
}


