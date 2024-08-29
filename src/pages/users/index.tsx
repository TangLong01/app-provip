"use client";

import {
  useFetchData,
  usePostData,
  usePutData,
  useDeleteData,
} from "@lib/useFetchData";

export default function UserScreen() {
  const { data, error, isLoading } = useFetchData("/api/endpoint");
  const postMutation = usePostData("/api/endpoint");
  const putMutation = usePutData("/api/endpoint");
  const deleteMutation = useDeleteData("/api/endpoint");

  const handlePost = () => {
    postMutation.mutate({ key: "value" });
  };

  const handlePut = () => {
    putMutation.mutate({ key: "updatedValue" });
  };

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handlePost} disabled={postMutation.isPending}>
        Post Data
      </button>
      <button onClick={handlePut} disabled={putMutation.isPending}>
        Put Data
      </button>
      <button onClick={handleDelete} disabled={deleteMutation.isPending}>
        Delete Data
      </button>
      {postMutation.isError && (
        <p>An error occurred: {postMutation.error.message}</p>
      )}
      {postMutation.isSuccess && <p>Data posted successfully!</p>}
      {putMutation.isError && (
        <p>An error occurred: {putMutation.error.message}</p>
      )}
      {putMutation.isSuccess && <p>Data updated successfully!</p>}
      {deleteMutation.isError && (
        <p>An error occurred: {deleteMutation.error.message}</p>
      )}
      {deleteMutation.isSuccess && <p>Data deleted successfully!</p>}
    </div>
  );
}
