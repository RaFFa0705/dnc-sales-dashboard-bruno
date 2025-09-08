import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponents,
  Logo,
  StyledH1,
  StyledP,
} from '@/components'
import { pxToRem } from '@/utils'

function Login() {
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
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              <FormComponents
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'senha' },
                ]}
                buttons={[
                  {
                    className: 'alert',
                    type: 'submit',
                    children: 'Login',
                    disabled: true,
                  },
                ]}
                message={{
                  msg: 'sucesso!!!',
                  type: 'success',
                }}
              />
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

export default Login
