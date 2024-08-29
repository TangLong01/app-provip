import apiClient from "@lib/apiClient";
import { useQuery, useMutation } from "@tanstack/react-query";

export function useFetchData(url: string) {
  return useQuery({
    queryKey: ["data", url],
    queryFn: () => apiClient.get(url),
  });
}

export function usePostData(url: string) {
  return useMutation({
    mutationFn: (data: object) => apiClient.post(url, data),
  });
}

export function usePutData(url: string) {
  return useMutation({
    mutationFn: (data: object) => apiClient.put(url, data),
  });
}

export function useDeleteData(url: string) {
  return useMutation({
    mutationFn: () => apiClient.delete(url),
  });
}
