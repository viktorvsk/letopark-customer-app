import React from 'react';

import { SlideIn,
        AlertDialog,
        AlertDialogOverlay,
        AlertDialogContent,
        AlertDialogHeader,
        AlertDialogCloseButton,
        AlertDialogBody,
        AlertDialogFooter,
        Button
} from '@chakra-ui/core';


export default class CancelModal extends React.Component {
  render () {
    const { isOpen, btnRef, onSubmit, onClose, cancelRef } = this.props;

    return (
      <SlideIn in={isOpen}>
        {styles => (
          <AlertDialog
            leastDestructiveRef={cancelRef}
            finalFocusRef={btnRef}
            onClose={onClose}
            isOpen
          >
            <AlertDialogOverlay opacity={styles.opacity} />
            <AlertDialogContent {...styles}>
              <AlertDialogHeader>Отменить заказ?</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Мы старались, а вы... :(
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Пока не нужно
                </Button>
                <Button variantColor='green' ml={3} onClick={onSubmit}>
                  Да!
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
              )}
      </SlideIn>
);
  }
}
