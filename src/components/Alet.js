import React from 'react'

export default function Alet(props) {
    const capitalixe =(word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>   
       {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show dark `}role="alert">
 <strong>{capitalixe( props.Alert.type)}</strong> :{props.Alert.msg}

</div>}
</div>

  )
}
