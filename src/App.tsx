import Router from './Router';
import QueryProvider from '#/providers/QueryProvider';

const App = () => {
    return (
        <QueryProvider>
            <Router />
        </QueryProvider>
    );
};

export default App;
