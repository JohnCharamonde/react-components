
//CREATING AND RENDERING A REACT COMPONENT

// var GroceryList = () => (
//   <ul>
//     <li>Milk</li>
//     <li>Cookies</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));

//CREATIING AND RENDERING NESTED REACT COMPONENTS


// var GroceryList = () => (
//   <ul>
//     <li><Milk/></li>
//     <li><Cookies/></li>
//   </ul>
// );

// var Milk = () => (
//   <div>Milk</div>
// );

// var Cookies = () => (
//   <div>Cookies</div>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));


// COMPONENT PROPERTIES AKA PROPS

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.listItem}</li>
//     );
//   };
// };

// var GroceryList = (props) => (
//   <ul>
//     {props.items.map(listItem =>
//       <GroceryListItem listItem = {listItem}/>
//     )}
//   </ul>
// );

// ReactDOM.render(<GroceryList items={['Cookies', 'Milk']} />, document.getElementById("app"));

//LI BOLD ON MOUSE OVER

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: false
    };
  }

  onListItemClick() {
    this.setState({
      dog: !this.state.dog
    });
  }

  render() {
    var style = {
      'font-weight': this.state.dog ? 'bold' : 'normal'
    };

    return (
      <li style={style} 

        onMouseEnter={this.onListItemClick.bind(this)}
        onMouseLeave={this.onListItemClick.bind(this)}>{this.props.listItem}</li>
    );
  };
};

var GroceryList = (props) => (
  <ul>
    {props.items.map(listItem =>
      <GroceryListItem listItem={listItem} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['Cookies', 'Milk']} />, document.getElementById("app"));