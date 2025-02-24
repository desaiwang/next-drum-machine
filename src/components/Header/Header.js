"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";

import { SoundEnabledContext } from "../SoundEnabledProvider";

function Header() {
  const id = React.useId();
  const { soundEnabled, toggleSoundEnabled } =
    React.useContext(SoundEnabledContext);

  // TODO: Global state?
  // const soundEnabled = true;

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            // TODO: flip `soundEnabled`
            toggleSoundEnabled();
          }}
        >
          {soundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundEnabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
