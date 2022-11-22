import {
  faGear,
  faHouse,
  faImage,
  faList,
  faPencil,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const menuItems = [
  {
    label: 'Home',
    // href: '/suppliers-and-customers',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    label: 'Banco de Dados',
    // href: '/suppliers-and-customers',
    icon: <FontAwesomeIcon icon={faPencil} />,
  },
  {
    label: 'Plano de Contas',
    href: '/account-plans',
    icon: <FontAwesomeIcon icon={faImage} />,
  },
  {
    label: 'Fornecedores e Clientes',
    href: '/suppliers-and-customers',
    icon: <FontAwesomeIcon icon={faList} />,
  },
  {
    label: 'Config',
    // href: '/suppliers-and-customers',
    icon: <FontAwesomeIcon icon={faGear} />,
  },
]
