// hooks/use-toast.ts
import { useCallback } from "react";

/**
 * Minimal toast shim so components compile.
 * Later you can wire a real toast (sonner/radix) with the same API.
 */
export function useToast() {
  const toast = useCallback(
    (opts: { title?: string; description?: string }) => {
      if (typeof window !== "undefined") {
        // Non-blocking fallback
        console.log(
          "Toast:",
          opts?.title ?? "",
          opts?.description ? `— ${opts.description}` : ""
        );
      }
    },
    []
  );
  return { toast };
}
