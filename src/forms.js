import React, { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    estado: '',
    cidade: '',
    comentario: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', class:'forms' }}>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <label>
          Nome:
          <input type="text" name="nome" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Telefone:
          <input type="tel" name="telefone" onChange={handleChange} />
        </label>
        <div style={{ gridColumn: 'span 2' }}>
          <label>
            Estado:
            <input type="text" name="estado" onChange={handleChange} />
          </label>
          <label>
            Cidade:
            <input type="text" name="cidade" onChange={handleChange} />
          </label>
        </div>
        <label style={{ gridColumn: 'span 2' }}>
          Comentário:
          <textarea name="comentario" onChange={handleChange} style={{ width: '100%', height: '100px' }} />
        </label>
        <input type="submit" value="Enviar" style={{ gridColumn: 'span 2' }} />
      </form>
      <footer style={{ textAlign: 'center' }}>
        Panificadora Pão Duro © 2016. Todos os direitos Reservados.
      </footer>
    </div>
  );
}

export default ContactForm;