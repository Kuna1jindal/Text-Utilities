import React from 'react';
export default function Alert(props){
    return (
      <>
      <div style={{height:"70px"}}>{
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}:{props.alert.message}</strong>
      </div>}
</div>
</>
    )
}