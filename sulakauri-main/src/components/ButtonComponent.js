import * as React from 'react';
// import Button from '@mui/material/Button';

import {X, Menu} from "lucide-react";
import Button from '@mui/material/Button';

export default function HelloButton() {
    return (
       <>
        {/* <Button variant='contained' color='warning' sx={{color: 'red'}}>Hello</Button> */}
        <X size={24} />
        <Menu />
       </>
    )
}