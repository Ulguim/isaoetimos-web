import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type MoreOptionsMenuProps = {
  options?: {
    icon: any
    label: string
    onClick?: () => void
  }[]
}

const MoreOptionsMenu: React.FC<MoreOptionsMenuProps> = ({
  options,
}) => {
  return (
    <Menu>
      <MenuButton as={Button} backgroundColor="white">
        <FontAwesomeIcon icon={faEllipsis} size="lg" />
      </MenuButton>
      <MenuList>
        {options?.map((option, index) => (
          <MenuItem
            key={index}
            icon={option.icon}
            display="flex"
            alignItems="center"
            onClick={option?.onClick}
          >
            <Box fontWeight="semibold" ml="-1">
              {option.label}{' '}
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default MoreOptionsMenu
