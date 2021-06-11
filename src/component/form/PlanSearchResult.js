import React, { Component } from 'react'
import ReactDataGrid from 'react-data-grid';

class PlanSearchResult extends Component {
    constructor(props) {
      super(props);

      this.state = {
        columns:[
          { key: "name", name: "Name", editable:true },
          { key: "email", name: "Email", editable:true  },
          { key: "gender", name: "Gender", editable:true  },
        ],
      };
    }

    render() { 
      console.log("in result")
      console.log(this.props)  
        return (
          <div className="mt-3 mx-auto" style={{ width: "100%", height: 350 }}>
            <ReactDataGrid
              columns={this.state.columns}
              rows={this.props.users}
            />
          </div>
        );
    }
}

export default PlanSearchResult
