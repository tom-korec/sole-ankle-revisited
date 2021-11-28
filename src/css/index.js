export const REM = (px) => `${px / 16}rem`;

const phoneBreakpoint = REM(600);

const tabletBreakpoint = REM(950);

const laptopBreakpoint = REM(1300);

const justPhone = `max-width: ${phoneBreakpoint}`;

const tabletsAndSmaller = `max-width: ${tabletBreakpoint}`;

const laptopsAndSmaller = `max-width: ${laptopBreakpoint}`;

export const MEDIA = {
  justPhone,
  tabletsAndSmaller,
  laptopsAndSmaller,
};
