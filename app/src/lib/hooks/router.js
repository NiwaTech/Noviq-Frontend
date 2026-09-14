import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();
  const current = router?.name === "Dashboard" ? "Home" : router?.name ?? "Home";
  return {
    current,
    to: (route, options = {}) => {
      const { params = false, replace = false, containerRender = false} = options;
      const query = params ? new URLSearchParams(params).toString() : "";
      if (containerRender) {
       return;
      }
      const path = route === "home" ? "/" : `/${route}`;
      if (params) {
        replace ? router.replace(`${path}?${query}`) : router.push(`${path}?${query}`);
      } else {
        replace ? router.replace(path) : router.push(path);
      }
    },
    back: () => router.back(),
    refresh: () => router.refresh(),
  };
};