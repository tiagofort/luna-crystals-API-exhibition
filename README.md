# Luna Crystals API

Luna Crystals API was developed using NodeJs. The project contemplates a semi jewelry store, managing product registration, user registration (administrators and customers), sales control, sales history, orders, reports and inventory control.

## Table of Contents
1. [Installation](#1-installation) <br/>
 1.1. [Install dependencies](#11-install-dependencies)
2. [Folder Structure](#2-folder-structure) <br/>
 2.1. [The project structure is organized as follows](#21-the-project-structure-is-organized-as-follows)
3. [Models](#3-models) <br/>
 3.1. [Cadastros (Records)](#31-cadastros-record) <br/>
 3.2. [Estoque (Inventory)](#32-estoque-inventory) <br/>
 3.3. [Item](#33-item) <br/>
 3.4. [Menu](#34-menu) <br/>
 3.5. [Pedido (Order)](#35-pedido-order) <br/>
 3.6. [Pedra (Stone)](#36-pedra-stone) <br/>
 3.7. [Rating](#37-rating) <br/>
 3.8. [Slide](#38-slide) <br/>
 3.9. [Usuarios (Users)](#39-usuarios-users) <br/>
 3.10. [Venda (Sale)](#310-venda-sale) <br/>
4. [Routes](#4-routes) <br/>
 4.1. [Avatar Route](#41-avatar-route) <br/>
 4.2. [Cadastro Route (Record Route)](#42-cadastro-route-record-route) <br/>
 4.3. [Estoque Route (Invetory Route)](#43-estoque-route-inventory-route) <br/>
 4.4. [Imagem Prod Route (Image Product Route)](#44-imagem-prod-route) <br/>
 4.5. [Item Route](#45-item-route) <br/>
 4.6. [Login Route](#46-login-route) <br/>
 4.7. [Menu Route](#47-menu-route) <br/>
 4.8. [Pedido Route (Order Route)](#48-pedido-route-order-route) <br/>
 4.9. [Pedra Route (Stone Route)](#49-pedra-route-stone-route) <br/>
 4.10. [Rating Route](#410-rating-route) <br/>
 4.11. [Slide Route](#411-slide-route) <br/>
 4.12. [Usuario Route (User Route)](#412-usuario-route-user-route) <br/>
 4.13. [Venda Route (Sale Route)](#413-venda-route-sale-route) <br/>
5. [Services](#5-services) <br/>
 5.1. [Avatar Service](#51-avatar-service) <br/>
 5.2. [Cadastro Service (Record Service)](#52-cadastro-service-record-service) <br/>
 5.3. [Estoque Service (Invetory Service)](#53-estoque-service-invetory-service) <br/>
 5.4. [Imagem Prod Service (Image Product Service)](#54-imagem-prod-service-image-prod-service) <br/>
 5.5. [Item Service](#55-item-service) <br/>
 5.6. [Login Service](#56-login-service) <br/>
 5.7. [Menu Service](#57-menu-service) <br/>
 5.8. [Pedido Service (Order Service)](#58-pedido-service-order-service) <br/>
 5.9. [Pedra Service (Stone Service)](#59-pedra-service-stone-service) <br/>
 5.10. [Rating Service](#510-rating-service) <br/>
 5.11. [Slide Service](#511-slide-service) <br/>
 5.12. [Usuario Service (User Service)](#512-usuario-service-user-service) <br/>
 5.13. [Venda Service (Sale Service)](#513-venda-service-sale-service) <br/>
 6. [Token](#6-token) <br/>
 7. [Utilities](#7-utilities) <br/>
 7.1. [Avatar-upload.js](#71-avatar-uploadjs)  <br/>
 7.2. [GerarCodigo.js](#72-gerarcodigojs)  <br/>
 7.3. [GerenciadorEmail](#73-gerenciadoremailjs)  <br/>
 7.4. [Img-upload.js](#74-img-uploadjs)  <br/>
 7.5. [Utils.js](#75-utilsjs)
8. [Other Packages used](#8-other-packages-used) <br/>
-----------------------------------
## 1. Installation

### 1.1. Install dependencies

1. Clone the repository: https://github.com/tiagofort/luna-crystals-api.git
2. Install dependencies: npm install
3. Start the development server: npm run dev

## 2. Folder Structure

### 2.1. The project structure is organized as follows:

├── **src** <br/>
│ ├── **db** <br/>
│ │ ├── index.js <br/>
│ ├── **errors** <br/>
│ │ ├── ErrorHandler.js <br/>
│ ├── **models** <br/>
│ │ ├── Cadastros.js (Records.js) <br/>
│ │ ├── Estoque.js (Inventory.js) <br/>
│ │ ├── Item.js (Item.js) <br/>
│ │ ├── Menu.js (Menu.js) <br/>
│ │ ├── Pedido.js (order.js) <br/>
│ │ ├── Rating.js <br/>
│ │ ├── Slide.js <br/>
│ │ ├── Pedra.js (Stone.js) <br/>
│ │ ├── Usuarios.js (Users.js) <br/>
│ │ ├── Venda.js (Sale.js) <br/>
│ ├── **routes** <br/>
│ │ ├── AvatarRoute.js <br/>
│ │ ├── CadastroRoute.js (RecordRoute.js) <br/>
│ │ ├── EstoqueRoute.js (InventoryRoute.js) <br/>
│ │ ├── ImagemProdRoute.js (PictureProdRoute.js) <br/>
│ │ ├── ItemRoute.js <br/>
│ │ ├── LoginRoute.js <br/>
│ │ ├── MenuRoute.js <br/>
│ │ ├── PedidoRoute.js (OrderRoute.js) <br/>
│ │ ├── PedraRoute.js (StoneRoute.js) <br/>
│ │ ├── RatingRoute.js <br/>
│ │ ├── SlideRoute.js <br/>
│ │ ├── UsuarioRoute.js (UserRoute.js) <br/>
│ │ ├── VendaRoute.js (SaleRoute.js) <br/>
│ ├── **service** <br/>
│ │ ├── AvatarService.js <br/>
│ │ ├── CadastroService.js (RecordService.js) <br/>
│ │ ├── EstoqueService.js (InventoryService.js) <br/>
│ │ ├── ImagemProdService.js (PictureProdService.js) <br/>
│ │ ├── ItemService.js <br/>
│ │ ├── LoginService.js <br/>
│ │ ├── MenuService.js <br/>
│ │ ├── PedidoService.js (OrderService.js) <br/>
│ │ ├── PedraService.js (StoneService.js) <br/>
│ │ ├── RatingService.js <br/>
│ │ ├── SlideService.js <br/>
│ │ ├── UsuarioService.js (UserService.js) <br/>
│ │ ├── VendaService.js (SaleService.js) <br/>
│ ├── **token** <br/>
│ │ ├── token.js <br/>
│ ├── **utilities** <br/>
│ │ ├── Avaatar-upload.js <br/>
│ │ ├── GerarCodigo.js (CreateCode.js) <br/>
│ │ ├── GerenciadorEmail.js (EmailManager.js) <br/>
│ │ ├── Img-upload.js <br/>
│ │ ├── Utils.js <br/>
│ ├── **index.js** <br/>
│ ├── **server.js** <br/>

### 2.1.1. DB Folder
The connection to the database is made in this layer. Here I set the database protocol, database user, database password, database host and database name to create the URI responsible for getting connection with Mongo Database. 

### 2.1.2. Errors Folder
This layer is responsible for handling error messages and converting to json by sending the status, status code and message error as a response. 

### 2.1.3. Models layer
This layer contains the database model. Here we have the representation of the database schema and the data typification of each field. 

### 2.1.4. Routes
This layer contains routes (post, put, get and delete) for each schema. Here, only the route system is treated separately.  

### 2.1.5. Services
This layer contains service methods for each schema. Here we have methods to save, to update, to get and to delete.

### 2.1.6. Token
This layer constains token methods. Here we have methods to generate every single token used for authentication.

### 2.1.7. Utilities
This layer was created to keep all files with functions that have some type of responsibility but that does not fit the other types. Here we keep the js file with functions to generate codes, to upload images to the aws bucket and some utils functions.

### 2.1.8. Index
The starting point. Here we get the port and start our server.js.

### 2.1.8. Server
That's the main point. Everything goes through here. Here we have imports for each route we have, we start the express, cors and also we start our database connection. The root of each route is defined here.
  
## 3. Models

### 3.1. Cadastros (Record)
That's a schema of the records structure. This schema was made for feeding with values ​​some registration forms of the system, for example, stones, material, type, etc. It works like a bucket.  
 
- **tela**: that's the form's name feeded by each record;
- **dados**: that's an object with 6 array to save data. Example, balde1: "Ring", "Necklace", "Bracelet", etc;
- **desc**: A small description what is the bucket about;

### 3.2. Estoque (Inventory)
This is the schema of the invetory structure. 

- **id_produto**: the product id which belongs to the inventory register;
- **cod_prod**: A cod_prod generated by GerarCodigo.js on Utilities.
- **id_venda**: Every single time when a sale is made we save an output type inventory movement and we save the id of the product being sold. The id_venda represents the product being sold. When the movement is an input, the id_venda is saved as empty. 
- **data_inclusao**: Field to save the day when the movement is created. 
- **vlr_unidade**: Field to save the unit value of the inventory movement.
- **qtd**: Field to save the amount of the inventory movement.
- **tipo**: Field to control which kind of movement has been done. 0 for input and 1 for output.

### 3.3. Item
This is the schema of the item (product) structure.

- **titulo**: the item title.
- **subtitulo**: the item subtitle 
- **cod_prod**: The product id is a long number and it's hard to keep it in mind. The cod_prod or product code was created to simplify a way to find a product by code without having to deal with so many disconected numbers, being formed by a simpler structure for memorization. The cod_prod is generated by a function on Utilities/GerarCodigo.js.
- **tipo**: the type of the item.
- **material**: the material of the item.
- **pedra**: the stone of the item.
- **peso**: the weight of the item.
- **comentario**: a comment about each item.
- **midia**: the item media. It's an object with 6 fields, starting with url1 untill url6 and one field named as video. Each item is able to sabe 6 url pictures and one url video.  
- **situacao**: As each item generates invetory movement, sales and others, the system does not allow deleting items. If an item is no longer available in the catalog, this field is used to deactivate it. TRUE for activated and FALSE to deactivated.
- **preco**: the selling price of the item.
- **valor_compra**: the purchase price of the item. 
- **desconto**: if the seller wants to apply some discount, this information is saved here.  
- **sugestoes**: it's an array to save item ids. The ids saved here are suggestions that will appear with the item when opened in the customer page.
- **data_inclusao**: Field to save the day when the item is created. 
 
### 3.4. Menu
This is the schema of the menu structure.. Here is saved the menu options for system administration.

- **desc**: the option description, ex: Home. 
- **rota**: the route to be directed when clicking on the option
- **ativo**: The visibility of the option. TRUE for visible and FALSE for not visible.
- **ordem**: The position to determinate the order that each option is going to be.

### 3.5. Pedido (Order)
This is the schema of the order structure.

- **titulo**: The order title.
- **id_produto**: the product id ordered. 
- **cod_produto**: the product cod ordered.
- **qtd**: the amount ordered.
- **id_remetente**: the customer id, who is ordering. 
- **nome_remetente**: the customer name.  
- **mensagem**: a customer's message.
- **status**: the order situation. 0 pending, 1 finished ou 2 canceled. 
- **lido**: if the message was read. 0 not read and 1 read. 
- **data_envio**: field to save the day when the order is created. 

### 3.6. Pedra (Stone)
This is the schema of stone structure. This schema was created to save information about stones. There is a section in the customer app with all information saved here.

- **pedra**: the stone name.
- **titulo1**: topic title 1.
- **sobre**: description about the stone.
- **titulo2**: topic title 2.
- **significado**: description about the meaning of the stone.
- **titulo3**: topic title 3.
- **efeitos**: description about the effects of the stone.
- **titulo4**: topic title 4.
- **limpeza**: how to clean each stone.

### 3.7. Rating
This is the schema of rating structure. 

- **rating**: the rating score informed by a customer. 
- **id_produto**: the ID of the product that the rating is about. 
- **id_cliente**: the ID of the client by whom the classification was made. 
- **comentario**: the comment added by the customer.
- **data_inclusao**: field to save the day when the rating is created.

### 3.8. Slide
This is the schema of slide structure. There is a carousel in the customer app feeded by this schema.

- **url**: the img url. 
- **id_produto**: the product id. 
- **ativo**: if the slide is activated or not. 
- **posicao**: position to define the order in which the slide will appear in the carousel.

### 3.9. Usuarios (Users)
This is the schema of users structure. 

- **nome**: the user name.
- **sobrenome**: the user surname.
- **usuario**: the user nickname.
- **email**: the user email.
- **phone**: the user phone.
- **senha**: the user password.
- **acesso**: the user status. 1 for inactive , 0 for active 
- **tipo**: the user type. 1 customer , 0 administrator. 
- **avatar**: avatar url.
- **ultAlt**: field to save the day when the user is created. 

### 3.10. Venda (Sale)
This is the schema of sales structure. 

- **cod_venda**: each sale has a code generated by a function on Utilities/GerarCodigo.js.
- **id_cliente**: the id of the customer who is making the purchase.
- **id_item**: the id of the product being purchased.
- **qtd**: the amount purchased.
- **vlr_unit**: the unit price purchased.
- **data_venda**: the date the sale is being made.
- **data_inclusao**: field to save the day when the user is created.

## 4. Routes

### 4.1. Avatar Route
Root route: **/envio_avatar** 

- **/salvar**: A POST route that calls the uploadImagem method from the Service layer.

### 4.2. Cadastro Route (Record Route)
Root route: **/cadastros**

- **/salvar**:  A POST route that calls the cadastrar method from the Service layer.
- **/buscaCadProd**: A GET route that calls the getCadProd method from the Service layer.

### 4.3. Estoque Route (Inventory Route)
Root route: **/estoque**

- **/addEstoque**: A POST route that calls the addEstoque method from the Service layer.
- **/estoques**: A GET route that calls the buscarEstoques method from the Service layer.
- **/estoque_id/:id**: A GET route that calls the buscarEstoqueID method from the Service layer. This route has an ID as parameter. 
- **/saidas**: A GET route that calls the buscarSaidas method from the Service layer.
- **/estoquesMov**: A GET route that calls the buscarEstoqueMov method from the Service layer.
- **/deletar/:id**: A DELETE route that calls the deletarID method from the Service layer. This route has an ID as parameter. 

### 4.4. Imagem Prod Route
Root route: **/envio_imagem_prod**

- **/salvar**: A POST route that calls the uploadImagem method from the Service layer.

### 4.5. Item Route
Root route: **/item**

- **/salvar**: A POST route that calls the salvar method from the Service layer.
- **/bucarItens**: A GET route that calls the buscarItens method from the Service layer.
- **/buscarNovidades**: A GET route that calls the buscarNovidades method from the Service layer.
- **/buscarId/:id**: A GET route that calls the buscarPorID method from the Service layer. This route has an ID as parameter
- **/buscar_sugestoes/:id**: A GET route that calls the buscarSugestoes method from the Service layer. This route has an ID as parameter
- **/buscarPorParamentro/:filtro**: A GET route that calls the buscarPorParametro method from the Service layer. This route has an ID named filter as parameter.
- **/editar/:id**: A PUT route that calls the editarID method from the Service layer. This route has an ID as parameter.
- **/gerir_sugestoes/:id**: A PUT route that calls the gerirSugestao method from the Service layer. This route has an ID as parameter.
- **/apagar/:id**: A DELETE route that calls the deletarID method from the Service layer. This route has an ID as parameter.

### 4.6. Login Route
Root route: **/login**

- **/auth**: A POST route that calls the autenticar method from the Service layer.
- **/auth_cliente**: A POST route that calls the autenticarCliente method from the Service layer.
- **/logout**: A GET route that calls the logout method from the Service layer.
- **/user**: A GET route that calls the getUser method from the Service layer.
- **/customer**: A GET route that calls the getCustomer method from the Service layer.

### 4.7. Menu Route
Root route: **/menu**

- **/salvar**: A POST route that calls the cadastrar method from the Service layer.
- **/menus**: A GET route that calls the getMenu method from the Service layer.

### 4.8. Pedido Route (Order Route)
Root route: **/pedido**

- **/addPedido**: A POST route that calls the addMensagem method from the Service layer.
- **/buscar_todos**: A GET route that calls the buscarTodos method from the Service layer.
- **/status/:id/:status**: A PUT route that calls the statusLida method from the Service layer. This route has an ID and status parameter. The status can be 0, 1 or 2.
- **/delete**: A DELETE route that calls the deletePedidos method from the Service layer. 

### 4.9. Pedra Route (Stone Route)
Root route: **/stone**

- **/salvar**: A POST route that calls the cadastrar method from the Service layer.
- **/buscar_pedra/:pedra**: A GET route that calls the buscarStoneID method from the Service layer. This route has an ID named pedra as parameter.

### 4.10. Rating Route
Root route: **/rating**

- **/addRating**: A POST route that calls the addRating method from the Service layer.
- **/add_comentario**: A POST route that calls the inserirComentario method from the Service layer.
- **/buscarRating/:id**: A GET route that calls the buscarRatingID method from the Service layer. This route has an ID as parameter. 
- **/buscarRating_cliente/:id_cli/:id_prod**: A GET route that calls the buscarRating_cliente method from the Service layer. This route has 2 IDs, named id_cli and id_prod, as parameter. 
- **/deleteComentario/:id**:  A DELETE route that calls the deleteComentario method from the Service layer. This route has an ID as parameter. 

### 4.11. Slide Route
Root route: **/slide**

- **/addSlide**: A POST route that calls the addSlide method from the Service layer.
- **/organizarSlide**: A POST route that calls the organizarSlide method from the Service layer.
- **/buscarSlides**: A GET route that calls the buscarSlides method from the Service layer.
- **/editarPosicao/:posicoes**: A PUT route that calls the editarPosicao method from the Service layer. This route has an ID as parameter.
- **/deletarSlide/:id**:  A DELETE route that calls the deleteSlide method from the Service layer. This route has an ID as parameter.

### 4.12. Usuario Route (User route)
Root route: **/usuario**

- **/salvar**: A POST route that calls the cadastrarUsuario method from the Service layer.
- **/salvar_cliente**: A POST route that calls the cadastrarCliente method from the Service layer.
- **/esqueceu_senha**: A POST route that calls the esqueceuSenha method from the Service layer.
- **/redefinir_senha**: A POST route that calls the alterarSenha method from the Service layer.
- **/verificar_email/:email**: A GET route that calls the verificarEmail method from the Service layer. This route has an ID named email as parameter.
- **/buscarUsuarios**: A GET route that calls the buscarUsuarios method from the Service layer.
- **/buscarClientes**: A GET route that calls the buscarClientes method from the Service layer.
- **/buscarMovimentacao**: A GET route that calls the movimentacaoCliente method from the Service layer.
- **/buscarTodos**: A GET route that calls the buscarTodos method from the Service layer.
- **/editarSenha/:id**: A GET route that calls the editarUsuario method from the Service layer. This route has an ID as parameter. 
- **/alterarTipo/:id**: A GET route that calls the inativarUsuario method from the Service layer. This route has an ID as parameter. This route has an ID as parameter. 
- **/confimar_email**: A GET route that calls the confimarEmail method from the Service layer.

### 4.13. Venda Route (Sale route)
Root route: **/venda**

- **/addVenda**: A POST route that calls the addVenda method from the Service layer.
- **/buscarVendas**: A GET route that calls the buscarVendas method from the Service layer. 
- **/topProdQtd/:ref**: A GET route that calls the topProdQtd method from the Service layer. This route has a parameter named ref.
- **/topProdTotal/:ref**: A GET route that calls the topProdTotal method from the Service layer. This route has a parameter named ref.
- **/topProdLucro/:ref**: A GET route that calls the topProdLucro method from the Service layer. This route has a parameter named ref.
- **/topClienteQtd/:ref**: A GET route that calls the topClienteQtd method from the Service layer. This route has a parameter named ref.
- **/topClienteTotal/:ref**: A GET route that calls the topClienteTotal method from the Service layer. This route has a parameter named ref.
- **/apagar/:id**: A DELETE route that calls the deleteVendaID method from the Service layer. This route has an ID as parameter. 

## 5. Services

### 5.1. Avatar Service

- **uploadImagem**: A function that calls the upload object from Avatar-upload.js. Basically this function, in interaction with Avatar-upload.js, saves the user avatar in the AWS bucket.

### 5.2. Cadastro Service (Record Service)

-  **cadastrar**: Function responsible for creating a new record in the collection
- **getCadProd**: This function searches for data referring to the item registration form. It has a specific ID which is precisely the ID of the record responsible for feeding the items form.

### 5.3. Estoque Service (Invetory Service)

- **addEstoque**: Function responsible for creating a new record in the collection.
- **buscarEstoques**: Function to return input movements.
- **buscarEstoqueID**: Function to return a specific inventory by ID.
- **buscarSaidas**: Function to return only output movements. 
- **buscarEstoqueMov**: Function to return input movements, excluding those that have quantity equal to zero and also sorting in descending order.
- **deletarID**: Function to delete a inventory movement by ID. 

### 5.4. Imagem Prod Service (Image Prod Service)

- **uploadImagem**: A function that calls the upload object from Img-upload.js. Basically this function, in interaction with Img-upload.js, saves item images in the AWS bucket.

### 5.5. Item Service

- **salvar**: Function responsible for creating a new record in the collection. Before save the new item, this function calls a function in GerarCodigo.js to generate the cod_prod. Also, after creating the new item record, a corresponding record is created in the invetory collection. This record is an input movement with quantity 0 and unit price empty. This is necessary becau every single item must have a movement, even if it is neutral.
- **buscarItens**: Function to return items with situacao (situation) field equal to true. That means the item is activated. 
- **buscarNovidades**: Function to return items with situacao (situation) field equal to true and sorting in descending order what means the function will return in order from the last saved item to the first one.
- **buscarPorID**: Function to return an item by ID.
- **buscarSugestoes**: Function to return suggestion linked with the id item sent by parameter. An item may or may not have registered suggestions.
- **buscarPorParametro**: Function to return items following the parameter filtro (filter) sent by route. If filtro is 'all', the function will return every single item with situacao (situation) equal to true. If not, the function will filter by pedra (stone) and situacao (situation) equal to true.
- **editarID**: Fucntion to edit an item by ID.
- **gerirSugestao**: Function to remove and insert suggestions by item ID.  
- **deletarID**: Function to delete an item.

### 5.6. Login Service

- **autenticar**: Function to authenticate administrator user. Email and password are checked. If does match, a token is created using user ID and secret word. We apply 1 day to expire the token. 
- **autenticarCliente**: Function to authenticate customer user. Email and password are checked. If does match, a token is created using user ID and secret word. We apply 1 day to expire the token. 
- **logout**: Function to clean the token. 
- **getUser**: Function to check if the administrato user is authenticated or not.
- **getCustomer**:  Function to check if the customer user is authenticated or not.

### 5.7. Menu Service

- **cadastrar**: Function responsible for creating a new record in the collection.
- **getMenu**: Fuction to return all menus sorting in ascending order.

### 5.8. Pedido Service (Order Service)

- **addMensagem**: Function responsible for creating a new record in the collection.
- **buscarTodos**: Function to return all orders. 
- **statusLida**: Function to edit order status. This function gets an ID and status (check models for more information) as parameter.  
- **deletePedidos**: Function to delete an order by ID. This route has an ID as parameter.  

### 5.9. Pedra Service (Stone Service)

- **/salvar**: Function responsible for creating a new record in the collection.
- **/buscar_pedra/:pedra**: Function to return stone by name. This route has an parameter named pedra that contains the stone name. 

### 5.10. Rating Service

- **addRating**: Function responsible for creating the new rating in the collection.
- **inserirComentario**: Function responsible for creating the new comment in the collection.
- **buscarRatingID**: Function to return a rating by ID. This route has an ID as parameter. 
- **buscarRating_cliente**: Function to return the rating made by a specific customer by ID.
- **deleteComentario**: Function to delete a comment. This route has an ID paramenter to delete by ID customer. 

### 5.11. Slide Service

- **addSlide**: Function responsible for creating a new record in the collection.
- **organizarSlide**: Function to organize the slide position. 
- **buscarSlides**: Function to return all slides with ativo field equal to true and sorting by posicao field in ascending order. 
- **editarPosicao**: Function to edit slide position. 
- **deleteSlide**: Function to delete a slide. 

### 5.12. Usuario Service (User Service)

- **cadastrarUsuario**: Function responsible for creating a new administrator.
- **cadastrarCliente**: Function responsible for creating a new customer.
- **esqueceuSenha**: Function to send a password change request. 
- **alterarSenha**: Function to save the the new password. 
- **verificarEmail**: Function to verify if the email is already recorded. 0 if the email exists, 1 if does not. 
- **buscarUsuarios**: Function to return administrator users. 
- **buscarClientes**: Function to return customer users. 
- **movimentacaoCliente**: Function to return customer movement. if the customer has already bought something, he has movement.
- **buscarTodos**: Function to return all users, without distinction.
- **editarUsuario**: Function to edit user password. 
- **inativarUsuario**: Function to activate and deactivate an user. 
- **confirmarEmail**: Function to confirm an email. After sign in, the customer has to confirm registration. This funtion activates user account.

### 5.13. Venda Service (Sale Service)

- **addVenda**: Function to insert a sale. This function checks product inventory before save any sale. if the quantity they are trying to sell is equal to or less than the existing inventory, the sale is saved, if not, a message is returned informing the problem.  
- **buscarVendas**: Function to return all sales.
- **topProdQtd**: Function to return top seller products per quantity.
- **topProdTotal**: Function to return top seller products per total (€).
- **topProdLucro**: Function to return the top seller product per profit.
- **topClienteQtd**: Function to return the top buyer customer per quantity.
- **topClienteTotal**: Function to return the top buyer customer per total (€).
- **deleteVendaID**: Function to delete a sale. 

## 6. Token

- **verificarToken**: Function to verify the user token after user makes a log in.
- **verificarTokenEmail**: Function to verify the email token when a password request is made.
- **emailToken**: Function to extract the email from the token. 
- **criarToken**: Function to create a token when a log in is requested.
- **criarTokenEmail**: Function to create a token when a password request is made.

## 7. Utilities

### 7.1. Avatar-upload.js
Responsible for saving avatar image in AWS bucket. Here we set the bucket requirements to save an image.
### 7.2. GerarCodigo.js 
Here we have functions responsible for generate cod_prod and cod_vend.
### 7.3. GerenciadorEmail.js
Here we manage the sending emails to change password and confirm registration. The email templates are mounted here as well.
### 7.4. Img-upload.js
Responsible for saving item image in AWS bucket. Here we set the bucket requirements to save an image.
### 7.5. Utils.js
Here we have fucntions to order some arrays. 


## 8. Other Packages used

- Mongoose v. ^6.5.2.
- Multer v. ^1.4.5.
- Multer-s3 v. ^3.0.1.
- Nodemailer v. ^6.7.8.
- Moment v. ^2.29.4.
- Jsonwebtoken v. ^8.5.1.
- Json2xls v. ^0.1.2.
- Bcrypt v. ^5.0.1.
- Aws-sdk v. ^2.1224.0.
- Aws-sdk/client-s3 v. ^3.179.0.
