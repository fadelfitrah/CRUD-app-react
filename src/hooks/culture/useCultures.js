import { useQuery } from "@tanstack/react-query";
import { getCultures } from "../../services/culture/culture.service";

export function useCultures() {
  return useQuery({
    queryKey: ["cultures"],
    queryFn: getCultures,
    staleTime: 1000 * 60 * 5,
  });
}
