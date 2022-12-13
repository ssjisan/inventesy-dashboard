import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
export default function ProductInfo() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <Box
      sx={{
        p: 3,
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        padding: "20px 30px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Product Name"
        variant="outlined"
        size="small"
      />
      <Box>
        <Typography
          sx={{ mb: 2, fontSize: "16px", fontWeight: 600, color: "text.1000" }}
        >
          Media
        </Typography>
        <Box
          sx={{
            width: "100%",
            border: "1px dashed #9A9A9A",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 5,
          }}
        >
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <Box
                sx={{ width: "100%", display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent:
                      images.length !== 0 ? "space-between" : "center",
                  }}
                >
                  <Button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Add files
                  </Button>
                  &nbsp;
                  {images.length !== 0 && (
                    <Button onClick={onImageRemoveAll}>Remove all</Button>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    mt: images.length !== 0 && 2,
                  }}
                >
                  {imageList.map((image, index) => (
                    <Box sx={{ position: "relative" }} key={index}>
                      <img
                        src={image["data_url"]}
                        alt="url"
                        style={{
                          width: "140px",
                          height: "105px",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          zIndex: 9,
                          top: 68,
                          right: 8,
                          backgroundColor: "#F1D2D2",
                          borderRadius: "100%",
                        }}
                      >
                        {" "}
                        <IconButton
                          onClick={() => onImageRemove(index)}
                          sx={{ width: "32px", height: "32px" }}
                        >
                          <DeleteOutlineRoundedIcon sx={{ color: "#B71C1C" }} />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </ImageUploading>
        </Box>
      </Box>
    </Box>
  );
}
