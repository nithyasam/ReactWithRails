class Menu extends React.Component {

    render () {
        return (
            <div>
                <table style={{border: "1px solid black"}}>
                    <thead>
                    <tr>
                        <th style={{border: "1px solid black"}}>Date</th>
                        <th style={{border: "1px solid black"}}>Name</th>
                        <th style={{border: "1px solid black"}}>Is Present</th>
                        <th style={{border: "1px solid black"}}>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map(item => {
                        return (
                            <tr key={item.id}>
                                <td style={{border: "1px solid black"}}>{item.date}</td>
                                <td style={{border: "1px solid black"}}>{item.name}</td>
                                <td style={{border: "1px solid black"}}>{item.isPresent.toString()}</td>
                                <td style={{border: "1px solid black"}}>{item.price}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

