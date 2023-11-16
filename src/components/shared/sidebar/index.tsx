"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Divider,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";
import { PiMoonFill } from "react-icons/pi";
import sidebarstyles from "./sidebar.styles";
import { MdOutlineSearch } from "react-icons/md";
import SidebarFooter from "./SidebarFooter";
import { GoDotFill } from "react-icons/go";
import sidebar from "@/config/sidebar";
import Link from "next/link";
const Sidebar = () => {
  return (
    <Stack direction={"column"} sx={sidebarstyles.main}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={sidebarstyles.headContainer}
      >
        <Typography level="h3">Supporty</Typography>
        <IconButton sx={sidebarstyles.themeButton}>
          <PiMoonFill />
        </IconButton>
      </Stack>
      <Input startDecorator={<MdOutlineSearch />} />
      <Divider />
      <Stack direction={"column"} alignItems={"center"} gap={1}>
        {sidebar.map((sidebarItem) => {
          if (sidebarItem.type && sidebarItem.type === "accordion") {
            return (
              <AccordionGroup
                key={sidebarItem.key}
                sx={sidebarstyles.accordionGroup}
              >
                <Accordion>
                  <AccordionSummary sx={sidebarstyles.accordionSummary}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      {sidebarItem.icon}
                      <Box>{sidebarItem.label}</Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {sidebarItem.children &&
                        sidebarItem.children.map((sidebarChildren) => (
                          <ListItem key={sidebarChildren.key}>
                            <Link
                              href={sidebarChildren.to ?? ""}
                              style={{ width: "100%" }}
                            >
                              <ListItemButton>
                                <Stack
                                  direction={"row"}
                                  width={"100%"}
                                  alignItems={"center"}
                                  ml={"10%"}
                                  gap={2}
                                >
                                  <GoDotFill />
                                  <Typography level="body-md">
                                    {sidebarChildren.label}
                                  </Typography>
                                </Stack>
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>
            );
          } else {
            return (
              <Link
                key={sidebarItem.key}
                href={sidebarItem.to ?? ""}
                style={{ width: "100%" }}
              >
                <Box key={sidebarItem.key} sx={sidebarstyles.sidebarItem}>
                  {sidebarItem.icon}
                  <Box>{sidebarItem.label}</Box>
                </Box>
              </Link>
            );
          }
        })}
      </Stack>
      <Stack
        sx={{ marginTop: "auto", width: "100%" }}
        direction={"column"}
        gap={2}
      >
        <SidebarFooter />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
