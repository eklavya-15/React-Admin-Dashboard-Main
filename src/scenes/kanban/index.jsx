import React from "react";
import { Box} from "@mui/material";
// import { tokens } from "../../theme";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import Header from "../../components/Header";

const KanbanBoard = () => {
  const data = [
    {
      TaskID: 1,
      Title: "Task 1",
      Category: "Open",
    },
    {
      TaskID: 2,
      Title: "Task 2",
      Category: "InProgress",
    },
    {
      TaskID: 3,
      Title: "Task 3",
      Category: "Review",
    },
    {
      TaskID: 4,
      Title: "Task 4",
      Category: "Done",
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box>
        <KanbanComponent id="kanban" dataSource={data} keyField="TaskID">
          <ColumnsDirective>
            <ColumnDirective headerText="Open" keyField="Open" />
            <ColumnDirective headerText="In Progress" keyField="InProgress" />
            <ColumnDirective headerText="Review" keyField="Review" />
            <ColumnDirective headerText="Done" keyField="Done" />
          </ColumnsDirective>
        </KanbanComponent>
      </Box>
    </Box>
  );
};

export default KanbanBoard;
