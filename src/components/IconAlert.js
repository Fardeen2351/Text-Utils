import React from 'react'
import Alert from '@mui/material/Alert';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

function IconAlert(props) {
  return (
   props.alert&& <div>
        <Stack sx={{ width: '100%' }} spacing={2}>
     
     <Alert
       iconMapping={{
         success: <CheckCircleOutlineIcon fontSize="inherit" />,
       }}
     >
       <strong>{props.alert.msg}</strong>
     </Alert>
     </Stack>
    </div>
  )
}

export default IconAlert;
