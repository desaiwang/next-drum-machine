"use client";
import React from "react";

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const toggleSoundEnabled =
    // () =>
    // setSoundEnabled((currentEnabled) => !currentEnabled);

    React.useCallback(() => {
      setSoundEnabled((currentEnabled) => !currentEnabled);
    }, []);

  return (
    <SoundEnabledContext value={{ soundEnabled, toggleSoundEnabled }}>
      {children}
    </SoundEnabledContext>
  );
}

export default SoundEnabledProvider;
