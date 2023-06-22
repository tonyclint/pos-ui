import {extendBaseTheme} from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components;

export const theme = extendBaseTheme({
  components: {
    Button,
  },
  shadows: {
    5: {
      shadowColor: '#7090B0',
      shadowOpacity: 0.2,
      elevation: 10,
    }
  },
});
