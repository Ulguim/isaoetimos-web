import { Button } from "@chakra-ui/react"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

type PlusButtonProps = {
  onOpen: () => void;
  setEdit?: (e: boolean) => void;
}

export const PlusButton: FC<PlusButtonProps> = ({onOpen, setEdit}) => {
  return (
    <Button
        width="56px"
        height="56px"
        borderRadius="50%"
        position="absolute"
        boxShadow={'dark-lg'}
        bottom={10}
        right={10}
        zIndex={1}
        colorScheme="teal"
        onClick={() => {
          onOpen()
          setEdit(false)
        }}
      >
        <FontAwesomeIcon size="lg" icon={faPlus} />
      </Button>
  )
}
