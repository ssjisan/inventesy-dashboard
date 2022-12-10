import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
export default function ProductCard({ product }) {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {product.map((data) => (
        <Grid item xs={12} sm={6} md={2} key={data.id}>
          <Card
            sx={{
              boxShadow:
                "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
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
                      fontWeight: 600,
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
                      fontWeight: 600,
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
                      fontWeight: 600,
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
              sx={{ objectFit: "contain", backgroundColor:"#EBEFF2"}}
            />
            <CardContent>
              <Box>
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
