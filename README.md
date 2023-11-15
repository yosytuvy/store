routes

products                                function                                          method

    api/products                        handleGetProducts                                GET
    api/products/id/:_id                handleGetProductById                               GET 
    api/products/category/:category     handleGetProductsByCategory                        GET
    api/products/addRating",            handleAddRatingProduct                             PUT

users
    api/users/signup                    handleUserRegistration                  POST
    api/users/login                     handleLogin                             POST

carts
    api/carts/:userId                   handleGetCartByUserId                   GET
    api/carts/createCart                handleCreateCart                        POST
    api/carts/deleteCart/:cartId        handleDeleteCart                        DELETE
    api/carts/addProduct/:cartId                           handleAddProductToCart          POST
    api/carts/removeProduct/:cartId/:productId             handleRemoveProductFromCart     DELETE
    api/carts/incrementProductQuantity/:cartId/:productId  handleIncrementProductQuantity  PUT
    api/carts/decrementProductQuantity/:cartId/:productId  handleDecrementProductQuantity  PUT
