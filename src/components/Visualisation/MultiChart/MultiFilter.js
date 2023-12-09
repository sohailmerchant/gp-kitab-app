import React from "react";
import { Box } from "@mui/material";
import DateFilter from "./filters/DateFilter";
import AlignmentsFilter from "./filters/AlignmentsFilter";
import BookCharsFilter from "./filters/BookCharsFilter";

const MultiFilter = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "50px",
      }}
    >
      <DateFilter
        dateRange={props.dateRange}
        setDateRange={props.setDateRange}
      />
      <AlignmentsFilter
        bookAlignRange={props.bookAlignRange}
        setBookAlignRange={props.setBookAlignRange}
      />
      <BookCharsFilter
        bookCharRange={props.bookCharRange}
        setBookCharRange={props.setBookCharRange}
      />
    </Box>
  );
};

export default MultiFilter;
