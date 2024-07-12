import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllTopics } from "../../../../service";
import ModalUnstyled from "../TopicSaveModal";
import { IconButton, LinearProgress } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#242424",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  React.useEffect(() => {
    loadAllTopicsToUI();
  }, []);
  const [topics, setTopics] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const loadAllTopicsToUI = async () => {
    setLoading(true);
    const data = await getAllTopics();
    setTopics(data);
    setLoading(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ width: "100%" }}>
            <StyledTableCell >Başlık</StyledTableCell>
            <StyledTableCell >Ana Kategori</StyledTableCell>
            <StyledTableCell >Üst Kategori</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>

        {loading && (
          <TableRow>
            <TableCell colSpan={999}>
              <LinearProgress />
            </TableCell>
          </TableRow>
        )}
        <TableBody>
          {topics.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row.title}</StyledTableCell>
              <StyledTableCell align="left">
                {row?.category?.title || ""}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row?.subcategory?.title || ""}
              </StyledTableCell>
              <StyledTableCell
                align="left"
                sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <ModalUnstyled item={row}/>
                <IconButton>
                  <DeleteOutline />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
