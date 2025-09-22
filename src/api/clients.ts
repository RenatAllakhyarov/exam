class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string) {
        if (!baseUrl) {
            throw new Error("We can't get base URL for ApiClient");
        }

        this.baseUrl = baseUrl;
    }

    private async request(endpoint: string, method: string, data?: unknown) {
        const url = this.baseUrl + endpoint;

        const options: RequestInit = {
            method,
            headers: { "Content-Type": "application/json" },
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.body}`);
        }

        if (response.status === 204) {
            //all is good, but we don't get data
            return null;
        }

        return response.json();
    }

    get(endpoint: string) {
        return this.request(endpoint, "GET");
    }

    post(endpoint: string, data: unknown) {
        return this.request(endpoint, "POST", data);
    }

    put(endpoint: string, data: unknown) {
        return this.request(endpoint, "PUT", data);
    }

    patch(endpoint: string, data: unknown) {
        return this.request(endpoint, "PATCH", data);
    }

    delete(endpoint: string) {
        return this.request(endpoint, "DELETE");
    }
}

export const jsonPlaceholderClient = new ApiClient(
    "https://jsonplaceholder.typicode.com"
);
