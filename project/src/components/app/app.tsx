import MainScreen, { MainScreenProps } from '../../pages/main-screen/main-screen';

type AppProps = MainScreenProps;

export default function App({hotels, maxCountOffer} : AppProps): JSX.Element {
  return <MainScreen hotels={hotels} maxCountOffer={maxCountOffer}/>;
}
