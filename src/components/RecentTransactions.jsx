import React from "react";
import {
  Typography,
  useTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { mockTransactions } from "../../mockData";

const RecentTransactions = () => {
  const theme = useTheme();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatCost = (cost) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cost);
  };

  return (
    <Grid container>
      <Paper
        sx={{
          border:
            theme.palette.mode === "dark" ? "solid 1px #666" : "solid 1px #ccc",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          overflow: "auto",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.mode === "dark" ? "white" : "black"}
          fontWeight="600"
          sx={{ mx: 2, my: 1 }}
        >
          Recent Transactions
        </Typography>
        <TableContainer
          sx={{ maxHeight: 250, overflow: "auto", borderTop: "1px solid #ccc" }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: theme.palette.mode === "dark" ? "#333" : "#eee",
                    position: "sticky",
                    top: "0",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: theme.palette.mode === "dark" ? "#333" : "#eee",
                    position: "sticky",
                    top: "0",
                  }}
                >
                  User
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: theme.palette.mode === "dark" ? "#333" : "#eee",
                    position: "sticky",
                    top: "0",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontWeight: "bold",
                    bgcolor: theme.palette.mode === "dark" ? "#333" : "#eee",
                    position: "sticky",
                    top: "0",
                  }}
                >
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockTransactions.map((transaction, i) => (
                <TableRow key={`${transaction.txId}-${i}`} hover>
                  <TableCell>{transaction.txId}</TableCell>
                  <TableCell>{transaction.user}</TableCell>
                  <TableCell>{formatDate(transaction.date)}</TableCell>
                  <TableCell align="right">
                    {formatCost(transaction.cost)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};

export default RecentTransactions;
