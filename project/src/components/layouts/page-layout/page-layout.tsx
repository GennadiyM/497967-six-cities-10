import { PropsWithChildren } from 'react';
import { AuthorizationStatus } from '../../../const';
import Footer from '../footer/footer';
import Header from '../header/header';

export enum PageLayoutModifier {
  Main = 'page--gray page--main',
  Login = 'page--gray page--login',
}

type PageLayoutProps = {
  authorizationStatus: AuthorizationStatus;
  withFooter?: boolean;
  modifier?: PageLayoutModifier;
  withoutUserControl?: boolean;
};

export default function PageLayout({
  authorizationStatus,
  withFooter,
  children,
  modifier,
  withoutUserControl = false,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <div className={`page ${modifier}`}>
      <Header
        withoutUserControl={withoutUserControl}
        authorizationStatus={authorizationStatus}
      />
      {children}
      {withFooter && <Footer />}
    </div>
  );
}
