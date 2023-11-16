import { IconButton, Stack, Typography } from "@mui/joy";
import React from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import paginationStyles from "./pagination.styles";
interface IProps {
  onPageClick: (nextPage: number) => void;
  currentPage: number;
  totalPage: number;
}
const Pagination = ({ onPageClick, currentPage, totalPage }: IProps) => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={1}
    >
      <IconButton
        sx={paginationStyles.iconButton}
        onClick={() =>
          currentPage > 1 ? onPageClick(currentPage - 1) : onPageClick(1)
        }
      >
        <MdArrowBackIos />
        <Typography>Previous</Typography>
      </IconButton>
      <Stack gap={2} direction={"row"} alignItems={"center"}>
        <Typography>Page</Typography>
        <input
          type="number"
          min={1}
          style={paginationStyles.inputStyles()}
          value={currentPage}
        />
        <Typography>of {totalPage}</Typography>
      </Stack>
      <IconButton
        sx={paginationStyles.iconButton}
        onClick={() => onPageClick(currentPage + 1)}
      >
        <Typography>Next</Typography>
        <MdArrowForwardIos />
      </IconButton>
    </Stack>
  );
};

export default Pagination;
