import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Home } from './features/home/views/Home';
import { Posts } from './features/posts/views/Posts';
import { Header } from './components/Header';
import { store } from './infrastructure/Store';

export const App: FC = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/posts' element={<Posts />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
};
