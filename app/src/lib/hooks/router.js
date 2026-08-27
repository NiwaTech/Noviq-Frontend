import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  return {
    to: (route, params, replace) => {
      const path = route === "home" ? "/" : `/${route}`;
      if (params) {
        const query = new URLSearchParams(params).toString();
        replace ? router.replace(`${path}?${query}`) : router.push(`${path}?${query}`);
      } else {
        replace ? router.replace(path) : router.push(path);
      }
    },
    back: () => router.back(),
    refresh: () => router.refresh(),
  };
};