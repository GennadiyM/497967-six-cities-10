
import { PropsWithChildren } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

type PageLayoutProps = {
  withFooter?: boolean;
}

export default function PageLayout({withFooter, children} : PropsWithChildren<PageLayoutProps>) {
  return (
    <div className='page page--gray page--main'>
      <Header/>
      {children}
      {withFooter && <Footer/>}
    </div>
  );
}
