import React from "react";
import AdressCard from "../AddressCard/AdressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Typography } from "@mui/material";
import { StarIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AdressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            container
            spacing={2}
            sx={{ padding: 2, border: "1px solid #e0e0e0", borderRadius: 4 }}
          >
            <Grid xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" // Replace with actual product image URL
                alt="Product"
                style={{ width: "100px", height: "100px", marginRight: "16px" }}
              />
              <div>
                <Typography variant="h6">
                  Men Slim Mid Rise Black Jeans
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Color: pink | Size: M
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Seller: linaria
                </Typography>
              </div>
            </Grid>
            <Grid
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">₹1099</Typography>
            </Grid>
            <Grid
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="text"
                color="primary"
                endIcon={<StarIcon />}
                sx={{ textTransform: "none" }}
              >
                Rate & Review Product
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
