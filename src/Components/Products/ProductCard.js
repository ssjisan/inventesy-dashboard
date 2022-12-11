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
            <CardMedia
              component="img"
              alt="green iguana"
              height="180"
              src={data.image}
              sx={{ objectFit: "contain", backgroundColor: "#EBEFF2" }}
            />
            <CardContent>
              <Box sx={{ mb: "16px", display:"flex", gap:2, flexDirection:"column" }}>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 600, height: "40px" }}
                >
                  {data.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#757575" }}
                >
                  SKU:{data.stock}.00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box variant="filled">
                  {data.stock > 19 && (
                    <Typography
                      sx={{
                        backgroundColor: "#DDEDDD",
                        p: "3px",
                        color: "#1B5E20",
                        borderRadius: "4px",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Available
                    </Typography>
                  )}
                  {data.stock < 19 && data.stock > 1 && (
                    <Typography
                      sx={{
                        backgroundColor: "#FFE0B2",
                        p: "3px",
                        color: "#E65100",
                        borderRadius: "4px",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Limited
                    </Typography>
                  )}
                  {data.stock === 0 && (
                    <Typography
                      sx={{
                        backgroundColor: "#FFCDD2",
                        p: "3px",
                        color: "#B71C1C",
                        borderRadius: "4px",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Stock out
                    </Typography>
                  )}
                </Box>
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
