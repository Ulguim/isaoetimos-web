import {
  // faHouse,
  faImage,
  faList,
  faMoneyBillTransfer,
  faPencil,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const menuItems = [
  // {
  //   label: 'Home',
  //   href: '/suppliers-and-customers',
  //   icon: <FontAwesomeIcon icon={faHouse} />,
  // },
  {
    label: 'Fluxo de Caixa',
    href: '/admin/cash-flow',
    icon: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
  },
  {
    label: 'Finanças',
    href: '/admin/finances',
    icon: <FontAwesomeIcon icon={faPencil} />,
  },
  {
    label: 'Plano de Contas',
    href: '/admin/account-plans',
    icon: <FontAwesomeIcon icon={faImage} />,
  },
  {
    label: 'Fornecedores e Clientes',
    href: '/admin/suppliers-and-customers',
    icon: <FontAwesomeIcon icon={faList} />,
  },
  // {
  //   label: 'Config',
  //   href: '/admin/suppliers-and-customers',
  //   icon: <FontAwesomeIcon icon={faGear} />,
  // },
]
