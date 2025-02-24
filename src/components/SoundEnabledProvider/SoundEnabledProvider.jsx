"use client";
import React from "react";

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const toggleSoundEnabled = React.useCallback(() => {
    setSoundEnabled((currentEnabled) => !currentEnabled);
  }, []);

  return (
    <SoundEnabledContext value={{ soundEnabled, toggleSoundEnabled }}>
      {children}
    </SoundEnabledContext>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundEnabledContext);

  if (!data) {
    throw new Error(
      "Cannot consume SoundEnabled context without a SoundEnabledProvider"
    );
  }

  return data;
}

export default SoundEnabledProvider;
