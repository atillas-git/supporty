import Sidebar from "@/components/shared/sidebar";
import { Grid } from "@mui/joy";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Grid container>
        <Grid md={2}>
          <Sidebar />
        </Grid>
        <Grid md={10}>{children}</Grid>
      </Grid>
    </div>
  );
};

export default AppLayout;
