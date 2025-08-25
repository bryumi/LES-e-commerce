import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 5.625rem; */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.625rem 2rem;
    background-color: #24191b;
    /* box-shadow: 0px 8.5px 15px 0px #00000040; */

    height: 5.625rem;
    width: 100%;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: var(--font-cinzel);

    svg {
        width: 100%;
        max-width: 200px;
        height: auto;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    cursor: pointer;

    font-family: Poppins;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.neutral300};

    position: relative;

    img {
        width: 3.3125rem;
        height: 3.3125rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: top;
    }
`;
export const ProfileMenu = styled.div`
    position: absolute;
    top: 5rem;
    right: 0;
    width: 15rem;
    border: 1px solid ${({ theme }) => theme.colors.neutral300};
    background-color: #24191b;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
`;
export const ProfileMenuItem = styled.div`
    padding: 0.75rem 1rem;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
    p {
        font-family: Poppins;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5rem;

        color: ${({ theme }) => theme.colors.white};
    }
    &:hover {
        opacity: 0.8;
        color: ${({ theme }) => theme.colors.neutral100};
        &:first-child {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        &:last-child {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    min-height: 3.125rem;
    height: auto;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary100};
    @media (max-width: 1210px) {
        min-height: 6.25rem;
    }
    @media (max-width: 630px) {
        min-height: 9.375rem;
    }
`;

export const NavLink = styled(Link)<{
    $selected?: boolean;
    $inactive?: boolean;
}>`
    min-height: 3.125rem;
    padding: 10px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-family: Poppins;
    font-weight: ${({ $selected }) => ($selected ? '500' : '400')};
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.primary100};
    color: ${({ theme, $selected, $inactive }) =>
        $selected
            ? theme.colors.primary100
            : $inactive
            ? '#d5d5d5'
            : theme.colors.white};
    text-decoration: none;
    cursor: ${({ $inactive }) => ($inactive ? 'not-allowed' : 'pointer')};
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutral500};
        color: ${({ theme }) => theme.colors.neutral300};
    }
`;
export const NotificationButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    cursor: pointer;
`;
export const NotificationMenu = styled.div`
    width: 19.5rem;

    position: absolute;
    top: 3.25rem;
    right: 0;
    border: 1px solid ${({ theme }) => theme.colors.neutral300};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;

    display: flex;
    flex-direction: column;
`;
export const NotificationMenuItemHeader = styled.div`
    padding: 0.625rem 1.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral500};
    p {
        font-family: DM Sans;
        font-weight: 600;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.neutral300};
    }
`;
export const NotificationMenuItem = styled.div`
    padding: 0.625rem 1.25rem;

    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
    max-height: 20rem;
    overflow: auto;
    strong {
        font-family: DM Sans;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1.5rem;

        color: ${({ theme }) => theme.colors.neutral200};
    }
    p {
        font-family: DM Sans;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.5rem;

        color: ${({ theme }) => theme.colors.neutral300};
    }
    span {
        font-family: DM Sans;
        font-weight: 400;
        font-size: 11px;
        color: ${({ theme }) => theme.colors.neutral500};
    }
    svg {
        width: 19px;
        height: 19px;
        color: ${({ theme }) => theme.colors.neutral300};
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutral500};
        color: ${({ theme }) => theme.colors.neutral100};
        &:first-child {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
        &:last-child {
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        span {
            color: ${({ theme }) => theme.colors.neutral300};
        }
    }
`;

export const NotificationMenuItemRead = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary100};
`;
