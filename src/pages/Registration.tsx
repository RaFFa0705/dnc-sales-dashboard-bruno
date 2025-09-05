import { Box, Container, Grid } from '@mui/material'
import { BannerImage } from '@/components'

function Registration() {
  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // ✅ substitui xs / sm
            height: '100vh',
          }}
        >
          <Grid sx={{ alignItems: 'center', display: 'flex' }}>
            <Container maxWidth="sm">
              <h1>cadastro</h1>
            </Container>
          </Grid>

          <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
