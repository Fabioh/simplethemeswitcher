import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container} from './styles';

interface IProps {
    toggleTheme(): void
}

const Header: React.FC<IProps> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            Hello Word
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    );
};

export default Header;
