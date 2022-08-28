import { PropsWithChildren } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

export enum PageLayoutModifier {
  Main = 'page--gray page--main',
  Login = 'page--gray page--login',
  FavoritesEmpty = 'page--favorites-empty',
}

type PageLayoutProps = {
  withFooter?: boolean;
  modifier?: PageLayoutModifier;
  withoutUserControl?: boolean;
};

export default function PageLayout({
  withFooter,
  children,
  modifier,
  withoutUserControl = false,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <div className={`page ${modifier}`}>
      <Header withoutUserControl={withoutUserControl} />
      {children}
      {withFooter && <Footer />}
    </div>
  );
}
