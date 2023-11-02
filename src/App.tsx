import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Home } from './features/home/views/Home';
import { Posts } from './features/posts/views/Posts';
import { Header } from './components/Header';
import { store } from './infrastructure/Store';
import { AdminRouter } from './features/admin/AdminRouter';
import { Login } from './features/login/views/Login';

export const App: FC = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/admin/*' element={<AdminRouter />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
};
