import { Avatar, Box, Grid2, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 item xs={9}>
          <div className="space-y-2">
            <p className="font-semibold text-lg">Raam</p>
            <p className="opacity-70">April 5, 2023</p>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>Nice T-Shirt. Very Good Product</p>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ProductReviewCard;
