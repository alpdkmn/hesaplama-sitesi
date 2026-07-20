"use client";

import { Paper, Typography, Box, useTheme } from "@mui/material";
import { FcQuestions } from "react-icons/fc";

function ContentSections({ sections }) {
  const theme = useTheme();
  if (!sections) return null;

  return (
    <Box
      sx={{
        mt: 4,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr",
        },
        justifyContent: "center",
        gap: 3,
        width: "100%",
      }}
    >
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          height: "100%",
        }}
      >
        {sections.map((item, index) => (
          <Box sx={{ padding: 3 }} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "flex-start",
                mb: 1,
              }}
            >
              <FcQuestions size={30} />
              <Typography variant="h6" fontWeight={600}>
                {item.title}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
              }}
            >
              {item.content}
            </Typography>
          </Box>
        ))}
      </Paper>

      {/* {sections.map((item, index) => (
        <Paper
          key={index}
          elevation={1}
          sx={{
            p: 3,
            borderRadius: 4,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "flex-start",
              mb: 1,
            }}
          >
            <FcQuestions size={30} />
            <Typography variant="h6" fontWeight={600}>
              {item.title}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.8,
            }}
          >
            {item.content}
          </Typography>
        </Paper>
      ))} */}
    </Box>
  );
}

export default ContentSections;
