// The JavaScript for creating theaters

import React from 'react';

class Theater extends React.Component {
    constructor(){
      super();  
      this.state={checked: 0}
    }
    
    onChange(i){
       this.setState({
           checked: i
       });
    }
    
      render() {
  return(
      <div>
          {
              this.state.seats.map((seat,i)=>{
                  return <label key={i}>
                              <input 
                                  type="radio" 
                                  checked={this.state.checked == i ? true : false} 
                                  key={i+100}
                                  onChange={this.onChange.bind(this,i)} 
                                  value={i} />
                              {seat}
                          </label>
              })
          }
      </div>
  );
    }
  }

ReactDOM.render(<App />, document.getElementById('container'));