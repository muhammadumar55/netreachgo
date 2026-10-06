import { RouterProvider } from 'react-router';
import { LanguageProvider } from '@/app/context/language-context';
import { router } from '@/app/routes';
import { ErrorBoundary } from '@/app/error-boundary';

export default function App() {
  // Application Entry Point - NetReachGo V2.0
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ErrorBoundary>
  );
}