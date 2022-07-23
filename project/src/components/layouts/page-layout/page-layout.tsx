
import { ReactNode } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

type PageLayoutProps = {
  children: ReactNode | ReactNode[];
  withFooter?: boolean;
}

export default function PageLayout({withFooter = false, children} : PageLayoutProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header/>
      {children}
      {withFooter && <Footer/>}
    </div>
  );
}
