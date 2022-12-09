import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function ProductCard({ product }) {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {product.map((data) => (
        <Grid item xs={12} sm={6} md={3} key={data.id}>
          <Card
            sx={{
              boxShadow: "0px 4px 20px rgba(0, 117, 255, 0.1)",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                variant="filled"
                sx={{
                  zIndex: 9,
                  top: 16,
                  right: 16,
                  position: "absolute",
                }}
              >
                {data.stock > 19 && (
                  <Typography
                    sx={{
                      backgroundColor: "#00AB55",
                      p: "4px",
                      color: "white",
                      borderRadius: "4px",
                      fontSize: 12,
                    }}
                  >
                    Stock Available ({data.stock})
                  </Typography>
                )}
                {data.stock < 19 && data.stock > 1 && (
                  <Typography
                    sx={{
                      backgroundColor: "#FFC107",
                      p: "4px",
                      color: "white",
                      borderRadius: "4px",
                      fontSize: 12,
                    }}
                  >
                    Stock Limited ({data.stock})
                  </Typography>
                )}
                {data.stock === 0 && (
                  <Typography
                    sx={{
                      backgroundColor: "#FF4842",
                      p: "4px",
                      color: "white",
                      borderRadius: "4px",
                      fontSize: 12,
                    }}
                  >
                    Stock out
                  </Typography>
                )}
              </Box>
            </Box>
            <CardMedia
              component="img"
              alt="green iguana"
              height="160"
              src={data.image}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Box sx={{ height: "80px" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  {data.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 0.5,
                }}
              >
                <Typography
                  sx={{ fontSize: "16px", color: "#212B36", fontWeight: 600 }}
                >
                  ৳{data.price}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
