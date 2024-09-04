import { Slot } from "expo-router";
import { SessionProvider } from "../core/contexts/auth";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
