# Documentação do Projeto: Agenda de Contatos

## Visão Geral
Este projeto consiste em uma **Agenda de Contatos** desenvolvida com **Next.js (TypeScript + TailwindCSS)** para o frontend e uma **API em FastAPI** para fornecer informações sobre a região dos contatos com base no DDD. Ambas as aplicações estão hospedadas na **Render**.

## Funcionalidades
### **Aplicativo Web (Next.js)**
- **Login** com usuário e senha fictícios.
- **Cadastro de contatos** (Nome, Número de Telefone, Endereço).
- **Listagem de contatos** com:
  - Nome
  - Número de telefone
  - Endereço
  - Região (obtida via API de DDD)
  - Opção de favoritar contatos
  - Opção de excluir contatos
- **Filtros** para busca por:
  - Nome
  - Região
  - Contatos favoritados
- **Notificação de erro** caso um DDD inválido seja digitado.

### **API FastAPI (Consulta de Região por DDD)**
- Rota para listar todos os DDDs e suas regiões.
- Rota para retornar a região com base no DDD de um telefone fornecido.
- Tratamento de erros para DDDs inválidos.

## Tecnologias Utilizadas
- **Frontend:** Next.js, TypeScript, TailwindCSS
- **Backend:** FastAPI, Uvicorn
- **Hospedagem:** Render (tanto API quanto frontend)

---

## Como acessar o projeto na nuvem
O frontend e backend foram hospedados via render, é só acessar o link:
[https://ddd-app-frontend.onrender.com](https://ddd-app-frontend.onrender.com)

Demorará alguns segundos para o site iniciar, se quiser tornar tudo mais rápido, pode carregar o link da API diretamente:
[https://minidddapi.onrender.com](https://minidddapi.onrender.com)


## Como Rodar o Projeto Localmente
Se quiser rodar o projeto localmente, siga esses passos:


### **1. Clonar o Repositório do Frontend**
```sh
  git clone https://github.com/nicholasss0/ddd_app_Frontend.git
```

### **2. Clonar o repositório do Backend (miniDDDAPI) e configurar**
0. 
```sh
        git clone https://github.com/nicholasss0/miniDDDAPI.git
```

1. Crie um ambiente virtual:
   ```sh
        python -m venv .venv
        source .venv/bin/activate  # Linux/macOS
        .venv\Scripts\activate  # Windows
   ```
2. Instale as dependências:
   ```sh
    pip install -r requirements.txt
   ```
3. Rode o servidor:
   ```sh
   python main.py # Windows
   python3 main.py # Linux/macOS
   ```
4. A API estará disponível em: [http://127.0.0.1:3003](http://127.0.0.1:3003)

### **3. Configurar o Frontend (Next.js)**

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Entre na pasta `src/app/context` e acesse o arquivo ContactContex.tsx e substitua a linha da API na nuvem pela API local:
    ```js
    const response = await fetch(`https://minidddapi.onrender.com/region/${phone}`); 
            // troque por, para rodar a API localmente:
    const response = await fetch(`http://127.0.0.1:3003/${phone}`); 
    ```

4. Rode o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
5. A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## Como Usar

### **1. Login**
- Acesse a página de login: [http://localhost:3000/login](http://localhost:3000/login)
- Use as credenciais:
  - Usuário: `admin`
  - Senha: `1234`

### **2. Adicionar um Contato**
- Acesse a página: [http://localhost:3000/add-contact](http://localhost:3000/add-contact) através do prórpio site
- Preencha os campos e clique em "Salvar".

### **3. Listar e Filtrar Contatos**
- Acesse: [http://localhost:3000/contacts](http://localhost:3000/contacts) através do prórpio site
- Utilize os filtros para buscar contatos pelo nome, região ou favoritos.

### **4. Favoritar e Excluir Contatos**
- Clique no ícone de estrela para favoritar.
- Clique no botão de lixeira para excluir um contato.

---

## Como a API Funciona

### **Rotas Disponíveis**
| Método  | Rota                | Descrição |
|---------|----------------------|-------------|
| GET     | `/ddds`              | Lista todos os DDDs e suas regiões |
| GET     | `/region/{phone}`    | Retorna a região de um telefone |

### **Exemplo de Requisição para Buscar Região por DDD**
```sh
curl http://127.0.0.1:3003/region/11987654321
```
**Resposta:**
```json
{
  "ddd": "11",
  "region": "São Paulo"
}
```

Se o DDD for inválido, a resposta será:
```json
{
  "error": "DDD não encontrado"
}
```

---

## Contribuição
Caso queira contribuir com o projeto:
1. Fork este repositório
2. Crie uma branch (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adicionando uma nova feature'`)
4. Envie (`git push origin minha-feature`)
5. Abra um **Pull Request**

---

## Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.


