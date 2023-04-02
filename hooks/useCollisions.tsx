import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useCollisions() {
  const { data, error } = useSWR('/collisions.js', fetcher);

  if (data) console.log(data);

  return {
    data,
  };
}
