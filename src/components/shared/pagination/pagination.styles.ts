import { SxProps } from "@mui/joy/styles/types";

const paginationStyles = {
  inputStyles: () => {
    const style: React.CSSProperties = {
      padding: "0.5rem",
      borderRadius: "0.5rem",
      border: "1px solid #a1a1aa",
      outline: "none",
    };
    return style;
  },
  iconButton: () => {
    const style: SxProps = {
      px: 2,
      gap: 1,
      backgroundColor: "primary.200",
    };
    return style;
  },
};
export default paginationStyles;
