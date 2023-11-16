import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/joy";
import React from "react";
import { PiSignOut } from "react-icons/pi";
const SidebarFooter = () => {
  return (
    <>
      <Divider />
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Avatar>SP</Avatar>
        <Stack direction={"column"}>
          <Typography level="body-md" fontWeight={"bold"}>
            Sina Postacı
          </Typography>
          <Typography level="body-sm">sina.postaci.tedu@gmail.com</Typography>
        </Stack>
        <IconButton>
          <PiSignOut style={{ width: 20, height: 20 }} />
        </IconButton>
      </Stack>
    </>
  );
};

export default SidebarFooter;
