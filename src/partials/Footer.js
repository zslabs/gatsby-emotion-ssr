import { useTheme } from 'emotion-theming';

const Header = () => {
  const theme = useTheme();

  return (
    <div css={{
      fontSize: 50,
      marginTop: theme.space.large,

      [theme.mq.small__max]: {
        marginTop: theme.space.small
      }
    }}>
      Footer
    </div>
  )
}

export default Header;
