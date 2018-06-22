import React, { Component } from 'react'
import {connect} from 'react-redux'


class UP extends Component {
  render() {
    return (
      <div>
          <h2>Usuarios</h2>
          <ul>

          </ul>
      </div>
    )
  }
}

function mapStateToProps(){
    return{

    }
}
function mapDispatchToProps(){
    return{

    }
}

export const  UsersPage = connect(mapStateToProps, mapDispatchToProps)(UP)



