import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps &{

    title: string;
    IsActive?: boolean;
    type: 'open' | 'closed'
}

export function Filter({title, IsActive = false, type, ...rest} : Props) {
    const { colors } = useTheme();

    const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Button
        variant="outline"
        borderWidth={IsActive ? 1 : 0}
        borderColor={colorType}
        bgColor="gray.600"
        flex={1}
        size="sm"
        {...rest}
    >
        <Text color={IsActive ? colorType : "gray.300"} fontSize="xs" textTransform="uppercase">
            {title}
        </Text>


    </Button>
  );
}