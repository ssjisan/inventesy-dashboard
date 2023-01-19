import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Navbar from "../Navbar/Navbar";
import { navConfig } from "../Navbar/NavConfig";
import { Collapse, ListItem, ListItemButton, Typography } from "@mui/material";
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
  const DropdownLink = {
    height: "48px",
    paddingLeft: "3rem",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#637381",
    fontSize: "16px",
  };
  const { pathname } = useLocation();
  const [open, setOpen] = useState([]);
  useEffect(() => {
    const index = navConfig.findIndex((item) => {
      if (!item.subNav) {
        return item.link === pathname;
      } else {
        return item.subNav.find((subitem) => subitem.link === pathname);
      }
    });
    if (index !== -1) {
      setOpen((newOpen) => {
        newOpen[index] = true;
        return [...newOpen];
      });
    }
  }, [pathname]);
  const handleClick = (index) => {
    setOpen((prev) => {
      const newOpen = [...prev];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };
  const drawer = (
    <div>
      <Box sx={{ pl: 2.5, pt: 3, pb: 8, display: "inline-flex" }}>
        <img src="Logo.svg" alt="React Logo" />
      </Box>
      <List>
        {navConfig.map((item, index) => (
          <>
            <Link to={item.link} style={linkStyle} key={item.id}>
              <ListItem
                key={item.id}
                disablePadding
                sx={{
                  ml: 1.5,
                  background:
                  (item?.subNav?.find(subNav => pathname === subNav.link) && pathname !== item.link) && "rgba(245, 48, 98, 0.08)",
                  borderRadius: "10px",
                  width: "245px",
                  height: "44px",
                }}
                onClick={() => handleClick(index)}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    borderRadius: "10px",
                    width: "100%",
                    padding: "8px 16px 8px 16px",
                    height: "44px",
                    color: (item?.subNav?.find(subNav => pathname === subNav.link) && pathname !== item.link) ? "#F53062" : "#757575",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: (item?.subNav?.find(subNav => pathname === subNav.link) && pathname !== item.link) ? "#2065d1" : "#637381",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: (item?.subNav?.find(subNav => pathname === subNav.link) && pathname !== item.link) ? 600 : 400,
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
            {item.subNav
              ? item.subNav.map((subItem,subIndex) => (
                  <Collapse
                    in={open[index]}
                    sx={{ display: open[index] ? "block" : "none" }}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Link to={subItem.link} key={index} style={DropdownLink}>
                      <ListItem>
                        <ListItemIcon
                          sx={{
                            minWidth: "32px",
                            color:
                              pathname === subItem.link ? "#F53062" : "#757575",
                          }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                        <Typography
                          sx={{
                            color:
                              pathname === subItem.link ? "#F53062" : "#757575",
                            fontWeight: pathname === subItem.link ? 600 : 400,
                            fontSize: "14px",
                          }}
                        >
                          {subItem.title}
                        </Typography>
                      </ListItem>
                    </Link>
                  </Collapse>
                ))
              : null}
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
