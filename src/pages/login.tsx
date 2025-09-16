import type { ChangeEvent } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

// COMPONENTS
import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponents,
  Logo,
  StyledH1,
  StyledP,
} from '@/components'
//HOOKS
import { useFormValidation, usePost } from '@/hooks'

//TYPES
import type {
  DecodedJWT,
  MessageProps,
  LoginData,
  LoginPostData,
} from '@/types'

//UTILS
import { jwtExpirationDateConverter, pxToRem } from '@/utils'

function Login() {
  const navigate = useNavigate()
  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Senha' },
  ]
  const { data, loading, error, postData } = usePost<LoginData, LoginPostData>(
    'logins'
  )
  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleMessage = (): MessageProps => {
    if (!error) return { msg: '', type: 'success' }
    switch (error) {
      case 401:
        return {
          msg: 'Email e/ou senha inválidos',
          type: 'error',
        }
      default:
        return {
          msg: 'Não foi possivel realizar a operação.',
          type: 'error',
        }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJWT = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data?.jwt_token, {
        expires: jwtExpirationDateConverter(decoded.exp),
        secure: true,
      })
    }
    if (Cookies.get('Authorization')) navigate('/home')
  }, [data, navigate])

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
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'alert',
                    disabled: !formValid || loading,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: loading ? 'Aguarde...' : 'Login',
                  },
                ]}
                message={handleMessage()}
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
