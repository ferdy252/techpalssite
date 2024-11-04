import Header from '../Header';
import Footer from '../Footer';
import GlobalBackground from './GlobalBackground';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative bg-transparent">
      <GlobalBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-transparent">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 