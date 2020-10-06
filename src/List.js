import React from 'react';

class List extends React.Component {



    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) => <li>{number}</li>)
        return <div>
            {listItems}
        </div>
    }
}

export default List