import { AgeVerification, ScrollToTop, ErrorBoundary, SkipToContent, CookieConsent, LiveChat, ShoppingCart, MobileBottomNav, ToastProvider } from './components/ui';
import Home from './pages/Home';

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <SkipToContent />
        <AgeVerification />
        <CookieConsent />
        <LiveChat />
        <ShoppingCart />
        <MobileBottomNav />
        <Home />
        <ScrollToTop />
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
