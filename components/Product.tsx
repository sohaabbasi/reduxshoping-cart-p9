import React from "react"
import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import { ProductItem } from "../global"

import { add, store } from '../store/index'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10px"
  },
  dis_pro:{
    marginBottom:"100px"
  },
  body_dis_card:{
    marginTop:"140px",
    // boxShadow: '10px 20px 30px 30px #547b204d',

    boxShadow: '10px 10px 15px 15px #888888',

  },
  h4: {
    fontSize: "28px",
    letterSpacing: "2px",
    fontWeight: 700,
    marginBottom: "5px",
    margin: "15px 0 10px 10px"
  },
  h5: {
    color: "#BDBDBD",
    fontSize: "26px",
    letterSpacing: "2px",
    fontWeight: 600,
    margin: "15px 0 10px 10px"
  },
  hvr_bounce_to_right: {
    height: "40px",
    width: "150px",
    fontSize: "15px",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "1px",
    margin: "15px 40px  "
  },
  dis_div: {
    marginLeft: "20px"
  },

  dis_img: {
    maxWidth: "250px",
    maxHeight: "400px",
    borderBottom: "5px solid #9E9E9E",
    margin: "5px"
  },


}));

export function Product() {
  const classes = useStyles();
  const products = useSelector((state: ProductItem[]) => state)

  const product = products.map((product, i) => {

    return (
      <Paper style={{ margin: "15px" }} className={classes.body_dis_card} elevation={5} key={i} >
        <img className={classes.dis_img} src={product.imageUrl} alt={i.toString()} />
        <div className={classes.dis_div}>
          <h4 className={classes.h4}>{product.title}</h4>
          <h5 className={classes.h5}>${product.price}</h5>
          <Button variant="contained" color="primary" className={classes.hvr_bounce_to_right} disabled={product.added} onClick={() => store.dispatch(add(product))}>add to cart</Button>
        </div>
      </Paper>
    )
  }


  )
  return (
    <Paper className={classes.dis_pro}  elevation={3}>
      <div className={classes.container}>
        {product}
      </div>
    </Paper>
  )
}










