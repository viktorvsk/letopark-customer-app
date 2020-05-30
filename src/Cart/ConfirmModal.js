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


export default class ConfirmModal extends React.Component {
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
              <AlertDialogHeader>Оформить заказ?</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Вы уверен, что хотите оформить заказ? Мы постараемся приготовить ровно к тому времени, что вы указали, чтоб заказ был теплым, и мы поймем, если вы не сможете приехать или передумаете. Но нам будет очень обидно :(
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Еще подумаю...
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
