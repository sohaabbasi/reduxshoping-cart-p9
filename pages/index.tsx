import React from "react";
import { Container, Box } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "../store";
import { Basket } from "../components/Basket";
import { Product } from "../components/Product";
import ButtonAppBar from "../components/Card";


const ShoppingBasket = () => {
  return (
    <Provider store={store}>
      <Box mb={5}>
        <ButtonAppBar />
      </Box>

      <Container maxWidth="md">
      <Box mt={5} mb={5}>
          <Basket />
        </Box>

        <Box mt={5} mb={5}>
          <Product />
        </Box>
       


      </Container>
    </Provider>
  )
}

export default ShoppingBasket
