import MainScreen, { MainScreenProps } from '../../pages/main-screen/main-screen';

export default function App({offers, maxCountOffer} : MainScreenProps) {
  return <MainScreen offers={offers} maxCountOffer={maxCountOffer}/>;
}
