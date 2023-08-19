import { Box, Card, CardContent } from '@mui/material'

// componente para padronizar as telas, sujeito a mudanças de acordo com as necessidades
export const DefaultScreenLayout = ({ children }: any) => {
  return (
    <Box pt={2}>
      <Card
        sx={{
          width: '95%',
          maxWidth: '1500px',
          height: '89vh',
          alignItems: 'center',
          justifyContent: 'center',
          m: 'auto',
        }}
      >
        <CardContent sx={{ height: '100%', padding: 2 }}>
          {children}
        </CardContent>
      </Card>
    </Box>
  )
}
