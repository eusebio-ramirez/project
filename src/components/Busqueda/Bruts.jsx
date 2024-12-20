import React from 'react';

const Bruts = () => {
  return (
    <div className="bruts">
      <input 
        type="text"
        placeholder="¿Qué tramite deseas realizar?"
        onKeyPress={({ key, target: { value } }) => {
            if(key === 'Enter'){
            window.location.href = "https://ruts.hidalgo.gob.mx/?text=" + value;
            }
        }}
        />
    </div>
  )
}

export default Bruts