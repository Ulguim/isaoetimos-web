
import React, { Children } from "react";
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import { Box } from "@chakra-ui/react";

 
const LayoutTemplate:React.FC<any> = ({children}) => {
  const { collapseSidebar } = useProSidebar();

  return (<>
    <Box width={'100vw'} height={16} bgColor='#008836'></Box>
    <Box width={'100vw'} display='flex' height={'calc(100vh - 64px)'} color='white' >
      <Sidebar  backgroundColor="#031C30">
        <Menu>
          <MenuItem > Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
        <main style={{bottom:'5px', position:'fixed'}} >
        <button  onClick={() => collapseSidebar()}>Collapse</button>
        
      </main>
      </Sidebar>
      <Box width={'100%'}>
     {children}
     </Box>
   
    </Box>
    </>
  );
}


export default LayoutTemplate