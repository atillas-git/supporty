import { accordionClasses } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

const sidebarstyles = {
  main: () => {
    const styles: SxProps = {
      minHeight: "100vh",
      backgroundColor: "primary.50",
      padding: "1.5rem",
      gap: 2,
    };
    return styles;
  },
  headContainer: () => {
    const styles: SxProps = {
      alignItems: "center",
    };
    return styles;
  },
  themeButton: () => {
    const styles: SxProps = {
      border: "1px solid",
      borderRadius: "0.5rem",
      "&:hover": {
        backgroundColor: "primary.200",
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease-in-out",
      },
    };
    return styles;
  },
  accordionGroup: () => {
    const styles: SxProps = {
      width: "100%",
      [`& .${accordionClasses.root}`]: {
        "& button:hover": {
          background: "transparent",
        },
      },
    };
    return styles;
  },
  accordionSummary: () => {
    const styles: SxProps = {
      color: "primary.50",
      borderRadius: "1rem",
      transitionTimingFunction: "ease-in-out",
      transitionDuration: "0.2s",
      "&:hover": {
        backgroundColor: "primary.300",
      },
    };
    return styles;
  },
  sidebarItem: () => {
    const styles: SxProps = {
      display: "flex",
      gap: 1,
      alignItems: "center",
      width: "100%",
      px: "1rem",
      py: "0.5rem",
      transitionTimingFunction: "ease-in-out",
      transitionDuration: "0.2s",
      cursor: "pointer",
      borderRadius: "1rem",
      "&:hover": {
        backgroundColor: "primary.300",
      },
    };
    return styles;
  },
};

export default sidebarstyles;
