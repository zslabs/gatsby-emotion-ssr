import { useTheme } from 'emotion-theming';

import BaseLayout from '../layouts/BaseLayout'

export default () => {
  const theme = useTheme();

  return (
    <BaseLayout>
      <div css={{fontSize: 50, marginTop: theme.space.large}}>404</div>
    </BaseLayout>
  );
}
