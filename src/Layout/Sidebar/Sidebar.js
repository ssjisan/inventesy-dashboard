import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Navbar from "../Navbar/Navbar";
import { navConfig } from "../Navbar/NavConfig";
import { Button, Typography } from "@mui/material";
const drawerWidth = 280;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // eslint-disable-next-line
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontWeight: 700,
    borderRadius: "10px",
  };
  const { pathname } = useLocation();

  const drawer = (
    <div>
      <Box sx={{ pl: 2.5, pt: 3, pb: 8, display: "inline-flex" }}>
        <img src="Logo.svg" alt="React Logo" />
      </Box>
      <List>
        {navConfig.map((item) => (
          <>
            <Link to={item.link} style={linkStyle} key={item.id}>
              <Box
                key={item.id}
                sx={{
                  ml: 1.5,
                  background:
                    pathname === item.link && "rgba(245, 48, 98, 0.08)",

                  borderRadius: "10px",
                  width: "245px",
                  height: "44px",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    borderRadius: "10px",
                    width: "100%",
                    padding: "8px 16px 8px 16px",
                    color: pathname === item.link ? "#F53062" : "#757575",
                    height: "44px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: pathname === item.link ? "#F53062" : "#757575",
                      marginRight: "16px",
                      minWidth: "24px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: pathname === item.link ? 600 : 400,
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    {item.title}{" "}
                  </Typography>
                </Button>
              </Box>
            </Link>
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightStyle: "dashed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
