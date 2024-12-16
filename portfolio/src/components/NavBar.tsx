import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "About Me", id: "about-me" },
  { name: "News", id: "news" },
  { name: "Projects", id: "projects" },
  { name: "CV", id: "cv" },
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    //const navbarHeight = 68.5; // Adjust this value based on your navbar height
    if (section) {
      const offset = section.offsetTop ;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setAnchorElNav(null); // Close the menu after scrolling
  };
  const scrollToTop = () =>{
    window.scrollTo({top:0, behavior: "smooth"});
    setAnchorElNav(null);
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            onClick={scrollToTop}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Arial",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#636363",
              textDecoration: "none",
            }}
          >
            HOMEPAGE
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "gray" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => scrollToSection(page.id)}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "#636363",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 10 }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => scrollToSection(page.id)}
                sx={{
                  my: 2,
                  color: "#636363",
                  display: "block",
                  fontFamily: "Roboto",
                  ml: 2,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
