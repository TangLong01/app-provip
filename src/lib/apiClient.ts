const apiClient = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return response.json();
  },

  async post<T>(url: string, data: object): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to post to ${url}: ${response.statusText}`);
    }
    return response.json();
  },

  async put<T>(url: string, data: object): Promise<T> {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to put to ${url}: ${response.statusText}`);
    }
    return response.json();
  },

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete ${url}: ${response.statusText}`);
    }
    return response.json();
  },
};

export default apiClient;
