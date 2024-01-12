import { useStyles } from './App.styles';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

export default function App() {
  const styles = useStyles();
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className={styles.root}>Hello world</div>
    </FluentProvider>
  );
}
