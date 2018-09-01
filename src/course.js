import React, { Component } from 'react';
class Course extends Component{
sumPrice(price){
  this.setState({total:this.state.total + price});
}
  constructor(props){
    super(props);

    this.state = {
      total:0
    };
    this.sumPrice=this.sumPrice.bind(this);
  }
  render(){
   console.log(this.props.items);
   var courses =this.props.items.map((item,i) => {
     return <Courses name={item.name} price={item.price} key={i} sumPrice={this.sumPrice} active={item.active}  />
   });
    return(
      <div>
      <h1> you can buy course:</h1>
      <div id="courses">
      {courses}
      <p id="total"><b> {this.state.total}</b></p>
      </div>

      </div>
    );
  }
}
export default Course;
class Courses extends Component {
  clicker(){
    var active=!this.state.active;
    this.setState({active:active});
    this.props.sumPrice(active ? this.props.price : -this.props.price);

  }
  constructor(props){
    super(props);

    this.state = {
      active:false
    };
    this.clicker=this.clicker.bind(this);
  }
  render(){
    return(
      <div>
<p className={this.state.active ? 'active' :''} onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    );
  }
}
