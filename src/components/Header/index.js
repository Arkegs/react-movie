import React from 'react';
import { Link } from 'react-router-dom';

import ReactMovieLogo from '../../images/react-movie-logo.svg';
import AppMovieLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, AppMovieLogoImg} from './Header.styles.js';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={ReactMovieLogo} alt='rmdb-logo' />
            </Link>
            <AppMovieLogoImg src={AppMovieLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;