/* ============================================================================
 * Copyright (c) SlashID
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import React from "react";

import { useSlashId } from "../Root/auth-context";
import Button from "../Root/Button";
import css from "./auth-button.module.css";

export default function AuthButton() {
  const { user, setShowLogin, logout } = useSlashId();

  const handleClick = React.useCallback(async () => {
    const isLoggedIn = Boolean(user);

    if (isLoggedIn) {
      await logout();
    } else {
      setShowLogin(true);
    }
  }, [logout, setShowLogin, user]);

  return (
    <div className={css.host}>
      <Button
        isSmall
        isSecondary
        onClick={handleClick}
        label={!user ? "Log in" : "Log out"}
      />
    </div>
  );
}