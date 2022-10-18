
import React, { Children } from "react";
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar } from 'react-pro-sidebar';
import { Box, Icon } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { menuItems } from "../organisms/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const LayoutTemplate:React.FC<any> = ({children}) => {
  const { collapseSidebar } = useProSidebar();

  return (<Box bgColor={'#DEDEDE'}>
    <Box width={'100vw'} height={16} bgColor='#008836'><Image  maxHeight={'99%'} src='/Logo.svg'/> </Box>
    <Box width={'100vw'} display='flex' height={'calc(100vh - 64px)'}  >
      <Box color={'white'}  display="flex" height={'calc(100vh - 64px)'}> 
      <Sidebar  backgroundColor="#031C30" >
        <Menu>
          {menuItems.map((itens )=>
          (<MenuItem > {itens.label}</MenuItem>))
          
        }
        </Menu>
        <main  style={{bottom:'5px', position:'fixed'}} >
       
      </main>
      <Box display={'flex'} marginBottom={0}  width={'100%'} justifyContent='center' >
        <button  onClick={() => collapseSidebar()}><FontAwesomeIcon icon={faArrowCircleLeft} /></button>
        </Box>
      </Sidebar>
      
      </Box>
      <Box width={'100%'}>
     {children}
     </Box>
   
    </Box>
    </Box>
  );
}


export default LayoutTemplate