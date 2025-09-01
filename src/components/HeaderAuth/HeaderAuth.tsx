'use client';
import { usePathname, useRouter } from 'next/navigation';
import {
    ActionsContainer,
    CartQtd,
    CartWrapper,
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
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/useCart';

const HeaderAuth = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [modalState, setModalState] = useState<string | undefined>(undefined);
    const router = useRouter();
    const pathname = usePathname();
    const { logout, isAuthenticated, user: currentUser } = useAuth();
    const { cart, clearCart } = useCart();
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
                        <LuBird
                            color="#F5EEEF"
                            size={50}
                            onClick={() => router.push('/')}
                        />
                    </HeaderLogo>
                    <ActionsContainer>
                        <ProfileWrapper>
                            {renderPhoto()}
                            <div>
                                <p>
                                    {isAuthenticated
                                        ? currentUser.username || 'Minha conta'
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
                                                {isAuthenticated &&
                                                    currentUser.role ===
                                                        'admin' && (
                                                        <ProfileMenuItem
                                                            onClick={() => {
                                                                router.push(
                                                                    '/cadastrar-livros',
                                                                );
                                                            }}
                                                        >
                                                            <p>
                                                                Cadastrar Livro
                                                            </p>
                                                        </ProfileMenuItem>
                                                    )}
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
                                                        router.push(
                                                            '/carrinho',
                                                        );
                                                    }}
                                                >
                                                    <p>Carrinho</p>
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
                                                        clearCart();
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
                        <CartWrapper>
                            <IoCartOutline
                                size={32}
                                color="#D1D0D0"
                                onClick={() => router.push('/carrinho')}
                            />
                            {cart.length > 0 && (
                                <CartQtd>
                                    {cart
                                        .map(item => item.quantity)
                                        .reduce((acc, curr) => acc + curr, 0)}
                                </CartQtd>
                            )}
                        </CartWrapper>
                    </ActionsContainer>
                </HeaderContainer>
            </Container>
        </>
    );
};

export default HeaderAuth;
