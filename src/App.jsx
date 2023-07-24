import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              paragraph
              align="center"
              color="textSecondary"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus soluta labore explicabo cumque veniam iure consectetur
              asperiores cupiditate unde dolorem!
            </Typography>

            <div>
              {/* Container wraps items */}
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
