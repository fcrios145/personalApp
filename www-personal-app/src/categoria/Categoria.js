import React from 'react'

const Categoria = () => {
  const handleSave = (event) => {
    event.preventDefault()
    alert("guardar")
  };

  return(
    <div className="tron">
      <h2>Categoría</h2>
      <form className="forms" onSubmit={handleSave}>
        <input type="text" id="nombre" name="nombre" placeholder="Categoria"/>
        <input type="submit" value="Guardar"/>
      </form>
    </div>
  )

}

export default Categoria;
