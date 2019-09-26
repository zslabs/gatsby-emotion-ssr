import { useTheme } from 'emotion-theming';

const Header = () => {
  const theme = useTheme();

  return (
    <div css={{
      fontSize: 50,
      marginBottom: theme.space.base,

      [theme.mq.small__max]: {
        fontSize: 25,
      }
    }}>
      Header
    </div>
  )
}

export default Header;
