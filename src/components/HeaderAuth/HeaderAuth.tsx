import { usePathname, useRouter } from 'next/navigation';
import {
    ActionsContainer,
    Container,
    HeaderContainer,
    HeaderLogo,
    NavContainer,
    NavLink,
    ProfileMenu,
    ProfileMenuItem,
    ProfileWrapper,
} from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import ModalNotification from '../ModalNotification/ModalNotification';
import { LuBird } from 'react-icons/lu';
import ModalLogin from '../ModalLogin/ModalLogin';
import { localStorageKeys } from '@/utils/localStorageKeys';
import { PiUserLight } from 'react-icons/pi';

const HeaderAuth = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [modalState, setModalState] = useState<string | undefined>(undefined);
    const router = useRouter();
    const pathname = usePathname();
    const { logout, isAuthenticated, user: currentUser } = useAuth();
    const profileRef = useRef<HTMLDivElement>(null);
    const savedData = JSON.parse(
        localStorage.getItem(localStorageKeys.userData) || '{}',
    );
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target as Node)
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const headerItens = [
        { title: 'Livros', href: '/livros' },
        { title: 'Categorias', href: '/edital-verticalizado' },
        { title: 'Promoções', href: '/conteudos' },
    ];
    const renderPhoto = () => {
        return <PiUserLight size={53} color="#D1D0D0" />;
    };
    return (
        <>
            {modalState === 'logout' && (
                <ModalNotification
                    title="Atenção!"
                    text="Tem certeza que deseja sair?"
                    onClose={() => setModalState(undefined)}
                    onConfirm={() => {
                        setModalState(undefined);
                        logout();
                    }}
                    closeText="Cancelar"
                    confirmText="Sair"
                    color="error100"
                    border="1px solid #FF0000"
                />
            )}
            {modalState === 'login' && (
                <ModalLogin
                    onConfirm={() => {
                        setModalState(undefined);
                        // Handle login confirmation
                    }}
                    onClose={() => setModalState(undefined)}
                />
            )}
            <Container>
                <HeaderContainer>
                    <HeaderLogo>
                        <LuBird color="#F5EEEF" size={50} />
                    </HeaderLogo>
                    <ActionsContainer>
                        <ProfileWrapper>
                            {renderPhoto()}
                            <div>
                                <p>
                                    {isAuthenticated
                                        ? savedData.name || 'Minha conta'
                                        : 'Minha conta'}
                                </p>
                            </div>
                            {profileOpen ? (
                                <IoIosArrowUp
                                    color="#747373"
                                    size={22}
                                    onClick={() => setProfileOpen(!profileOpen)}
                                />
                            ) : (
                                <IoIosArrowDown
                                    color="#747373"
                                    size={22}
                                    onClick={() => setProfileOpen(!profileOpen)}
                                />
                            )}
                            {profileOpen && (
                                <>
                                    <ProfileMenu ref={profileRef}>
                                        {!isAuthenticated && (
                                            <>
                                                <ProfileMenuItem
                                                    onClick={() => {
                                                        router.push(
                                                            '/cadastro',
                                                        );
                                                    }}
                                                >
                                                    <p>Cadastre-se</p>
                                                </ProfileMenuItem>
                                                <ProfileMenuItem
                                                    onClick={() => {
                                                        setModalState('login');
                                                    }}
                                                >
                                                    <p>Entrar</p>
                                                </ProfileMenuItem>
                                            </>
                                        )}
                                        {isAuthenticated && (
                                            <>
                                                <ProfileMenuItem
                                                    onClick={() => {
                                                        router.push(
                                                            '/meu-perfil',
                                                        );
                                                    }}
                                                >
                                                    <p>Perfil</p>
                                                </ProfileMenuItem>
                                                <ProfileMenuItem
                                                    onClick={() => {
                                                        router.push(
                                                            '/meus-enderecos',
                                                        );
                                                    }}
                                                >
                                                    <p>Meus endereços</p>
                                                </ProfileMenuItem>
                                                <ProfileMenuItem
                                                    onClick={() => {
                                                        router.push(
                                                            '/meus-cartoes',
                                                        );
                                                    }}
                                                >
                                                    <p>Meus cartões</p>
                                                </ProfileMenuItem>
                                                <ProfileMenuItem
                                                    onClick={() => {
                                                        // abrir modal de confirmação
                                                    }}
                                                >
                                                    <p>Excluir conta</p>
                                                </ProfileMenuItem>
                                                <ProfileMenuItem
                                                    onClick={() => {
                                                        logout();
                                                    }}
                                                >
                                                    <p>Sair</p>
                                                </ProfileMenuItem>
                                            </>
                                        )}
                                    </ProfileMenu>
                                </>
                            )}
                        </ProfileWrapper>
                    </ActionsContainer>
                </HeaderContainer>
                <NavContainer>
                    {headerItens.map(item => (
                        <NavLink
                            key={item.title}
                            href={item.href}
                            $selected={pathname === item.href}
                            $inactive={pathname === '/edital'}
                            onClick={e => {
                                if (
                                    pathname === item.href ||
                                    pathname === '/edital'
                                ) {
                                    e.preventDefault(); // Impede navegação
                                    return;
                                }

                                setProfileOpen(false);
                            }}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </NavContainer>
            </Container>
        </>
    );
};

export default HeaderAuth;
