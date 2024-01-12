import { useStyles } from "./App.styles";


export default function App() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.root}>Hello world</div>
    </>
  );
}
