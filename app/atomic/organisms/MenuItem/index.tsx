import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHouse,faPencil,faImage,faList, faGear } from "@fortawesome/free-solid-svg-icons";



export const menuItems = [
    {
      label: 'Home',
      href: '/suppliers-and-customers',
      icon:  <FontAwesomeIcon icon={faHouse}/>,
   
    },
    {
        label: 'Banco de Dados',
        href: '/suppliers-and-customers',
        icon:  <FontAwesomeIcon icon={faPencil}/>,
        
      },
      {
        label: 'Plano de Contas',
        href: '/suppliers-and-customers',
        icon:  <FontAwesomeIcon icon={faImage}/>,
      
      },
      {
        label: 'Fornecedores e Clientes',
        href: '/suppliers-and-customers',
        icon:  <FontAwesomeIcon icon={faList}/>,
       
      },
      {
        label: 'Config',
        href: '/config',
        icon:  <FontAwesomeIcon icon={faGear}/>,
      
      },
 
  ]