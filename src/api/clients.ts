class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        if (!baseUrl) {
            throw new Error("Base URL is required for ApiClient.");
        }
        this.baseUrl = baseUrl;
    };

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const config: RequestInit = {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                const errorData = await response
                    .json()
                    .catch(() => ({ message: response.statusText }));
                throw new Error(errorData.message || "Network error");
            };

            if (response.status === 204) {
                return null as T;
            };

            return (await response.json()) as T;
        } catch (error) {
            console.error(`API Error on ${url}:`, error);
            
            throw new Error(`Request failed: ${(error as Error).message}`);
        };
    };

    get<T>(endpoint: string, options?: RequestInit) {
        return this.request<T>(endpoint, { ...options, method: "GET" });
    };

    post<T>(endpoint: string, data: unknown, options?: RequestInit) {
        return this.request<T>(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(data),
        });
    };

    put<T>(endpoint: string, data: unknown, options?: RequestInit) {
        return this.request<T>(endpoint, {
            ...options,
            method: "PUT",
            body: JSON.stringify(data),
        });
    };

    patch<T>(endpoint: string, data: unknown, options?: RequestInit) {
        return this.request<T>(endpoint, {
            ...options,
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }

    delete<T>(endpoint: string, options?: RequestInit) {
        return this.request<T>(endpoint, { ...options, method: "DELETE" });
    }
}

export const jsonPlaceholderClient = new ApiClient(
    "https://jsonplaceholder.typicode.com"
);
