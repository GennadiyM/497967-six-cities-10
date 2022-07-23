import MainScreen, { MainScreenProps } from '../../pages/main-screen/main-screen';

type AppProps = MainScreenProps;

export default function App({offers, maxCountOffer} : AppProps): JSX.Element {
  return <MainScreen offers={offers} maxCountOffer={maxCountOffer}/>;
}
