import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/router';

const queryClient = new QueryClient();

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
