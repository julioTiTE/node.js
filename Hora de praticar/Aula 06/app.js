const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const posts = [
    { id: 1, titulo: 'Primeiro Post', conteudo: 'Este é o conteúdo do primeiro post.', autor: 'João' },
    { id: 2, titulo: 'Segundo Post', conteudo: 'Este é o conteúdo do segundo post.', autor: 'Maria' },
    { id: 3, titulo: 'Terceiro Post', conteudo: 'Este é o conteúdo do terceiro post.', autor: 'Carlos' },
  ];
  

  app.get('/blog', (req, res) => {
    const listaDePosts = posts.map(post => ({
      id: post.id,
      titulo: post.titulo
    }));
    res.json(listaDePosts);
  });
  

  app.get('/blog/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
  
    if (post) {
      res.json({
        titulo: post.titulo,
        conteudo: post.conteudo
      });
    } else {
      res.status(404).json({ mensagem: 'Post não encontrado' });
    }
  });
  