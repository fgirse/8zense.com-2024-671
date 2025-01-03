import { usePersonalAccount } from '@usebasejump/next';

export function MyComponent() {
    const {data, error, isLoading} = usePersonalAccount();

    return (
        <h1>Hello {data?.name}</h1>
    )
};

