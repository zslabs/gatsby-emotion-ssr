import { useTheme } from 'emotion-theming';

import BaseLayout from '../layouts/BaseLayout'

export default () => {
  const theme = useTheme();

  return (
    <BaseLayout>
      <div css={{
        background: 'purple',
        color: '#fff',

        [theme.mq.medium]: {
          background: 'red'
        }

      }}>
        Red on screens 768px or higher
      </div>
      <div css={{
        background: 'purple',
        color: '#fff',

        [theme.mq.medium]: {
          background: 'yellow'
        }

      }}>
        Yellow on screens 768px or higher
      </div>
      <div css={{
        background: 'purple',
        color: '#fff',

        [theme.mq.medium]: {
          background: 'green'
        }

      }}>
        Green on screens 960px or higher
      </div>
    </BaseLayout>
  );
}
