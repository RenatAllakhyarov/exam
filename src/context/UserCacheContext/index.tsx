import Loader from "../../components/Loader";
import ErrorState from "../../components/ErrorState";
import { usersApi } from "../../api/users";
import { type IUser } from "../../types";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactElement,
    type ReactNode,
    useCallback,
} from "react";

interface IUsersCacheContext {
    users: IUser[];
    loading: boolean;
    error: string | null;
    getUserNameById: (userId: number) => string;
}

const UsersCacheContext = createContext<IUsersCacheContext | undefined>(
    undefined
);

interface IUsersCacheProviderProps {
    children: ReactNode;
}

export const UsersCacheProvider = ({
    children,
}: IUsersCacheProviderProps): ReactElement => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const fetchedUsers = await usersApi.getUsers();

            setUsers(fetchedUsers);
        } catch (error) {
            console.error("Failed to fetch users:", error);

            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const getUserNameById = useCallback(
        (userId: number): string => {
            const foundUser = users.find((user) => user.id === userId);
            if (!foundUser) {
                return `Пользователь ${userId} не найден`;
            }
            return foundUser.name;
        },
        [users]
    );

    if (loading) {
        return <Loader message="Загрузка пользователей..." />;
    }

    if (error) {
        return (
            <ErrorState
                message={`Ошибка загрузки пользователей: ${error}`}
                onRetry={fetchUsers}
            />
        );
    }

    return (
        <UsersCacheContext.Provider
            value={{ users, loading, error, getUserNameById }}
        >
            {children}
        </UsersCacheContext.Provider>
    );
};

export const useUsersCache = () => {
    const context = useContext(UsersCacheContext);
    if (!context) {
        throw new Error(
            "useUsersCache must be used within a UsersCacheProvider"
        );
    }
    return context;
};
