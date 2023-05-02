import styles from "./index.module.css";

export const TestTheme = () => {
  return (
    <>
      <div className={styles.primary}>
        <p>--md-sys-color-primary</p>
        <p>--md-sys-color-on-primary</p>
      </div>
      <div className={styles.primaryContainer}>
        <p>--md-sys-color-primary-container</p>
        <p>--md-sys-color-on-primary-container</p>
      </div>
      <div className={styles.secondary}>
        <p>--md-sys-color-secondary</p>
        <p>--md-sys-color-on-secondary</p>
      </div>
      <div className={styles.secondaryContainer}>
        <p>--md-sys-color-secondary-container</p>
        <p>--md-sys-color-on-secondary-container</p>
      </div>
      <div className={styles.tertiary}>
        <p>--md-sys-color-tertiary</p>
        <p>--md-sys-color-on-tertiary</p>
      </div>
      <div className={styles.tertiaryContainer}>
        <p>--md-sys-color-tertiary-container</p>
        <p>--md-sys-color-on-tertiary-container</p>
      </div>
      <div className={styles.error}>
        <p>--md-sys-color-error</p>
        <p>--md-sys-color-on-error</p>
      </div>
      <div className={styles.errorContainer}>
        <p>--md-sys-color-error-container</p>
        <p>--md-sys-color-on-error-container</p>
      </div>

      <div className={styles.background}>
        <p>--md-sys-color-background</p>
        <p>--md-sys-color-on-background</p>
      </div>

      <div className={styles.surface}>
        <p>--md-sys-color-surface</p>
        <p>--md-sys-color-on-surface</p>
      </div>
      <div className={styles.surfaceVariant}>
        <p>--md-sys-color-surface-variant</p>
        <p>--md-sys-color-on-surface-variant</p>
      </div>
      <div className={styles.outline}>
        <p>--md-sys-color-outline</p>
        {/* <p>--md-sys-color-on-outline</p> */}
      </div>

      <div className={styles.outlineVariant}>
        <p>--md-sys-color-outline-variant</p>
        {/* <p>--md-sys-color-on-outline</p> */}
      </div>

      <div className={styles.inverseSurface}>
        <p>--md-sys-color-inverse-on-surface</p>
        <p>--md-sys-color-inverse-surface</p>
      </div>

      <div className={styles.inversePrimary}>
        <p>--md-sys-color-inverse-primary</p>
      </div>

      <div className={styles.shadow}>
        <p>--md-sys-color-shadow</p>
      </div>
      <div className={styles.surfaceTint}>
        <p>--md-sys-color-surface-tint</p>
        {/* <p>--md-sys-color-surface-tint</p> */}
      </div>
      <div className={styles.scrim}>
        <p>--md-sys-color-scrim</p>
        {/* <p>--md-sys-color-surface-tint</p> */}
      </div>
    </>
  );
};
