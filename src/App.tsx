import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './features/home/views/Home';
import { Posts } from './features/posts/views/Posts';
import { Header } from './components/Header';

export const App: FC = () => {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/posts' element={<Posts />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
