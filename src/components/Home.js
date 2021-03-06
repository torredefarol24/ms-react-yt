import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         age: props.initialAge,
         homeLinkHC: props.initialLinkName,

      }
      this.onMakeAgeOlder = this.onMakeAgeOlder.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onHandleChange = this.onHandleChange.bind(this);
   }
   
   onMakeAgeOlder(){
      this.setState({
         age: this.state.age + 3
      })
   }

   onChangeName(){
      this.props.changeLink(this.state.homeLinkHC)
   }

   onHandleChange(event){
      this.setState({
         homeLinkHC: event.target.value
      })
   }

   render(){
      
      return (
         <div className='container'>
            <div className='row'>
               <h3> Hey Hey</h3>
               <p>Name: {this.props.name}</p>
               <p>Age:{this.state.age}</p>
               {/* <p>{this.props.children}</p> */}
               <button onClick={this.onMakeAgeOlder} className='btn btn-primary'>Inc Age</button>
               <button onClick={this.props.greet} className='btn btn-default'>Greet</button>
               <hr/>
               <input type='text' className='form-control' defaultValue={this.props.initialLinkName} onChange={this.onHandleChange} />
               <button onClick ={this.onChangeName} className='btn btn-warning'> Change Name</button>
            </div>
         </div>
      );
   }
}

Home.propTypes = {
   name: PropTypes.string,
   age: PropTypes.number,
   greet: PropTypes.func,
  
}