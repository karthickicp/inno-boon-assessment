import React, { useContext } from "react";
import { Box, Button, Card, Grid } from "@mui/material";
import { CounterContext } from "./context";
export const Counter = () => {
  const counter = useContext(CounterContext);
  return (
    <div className="body-view">
      {counter.count > 0 ? (
        <Grid container spacing={2}>
          {[...new Array(counter?.count)].map((_, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={`card-${index + 1}`}
            >
              <Card sx={{ padding: "1rem" }}>
                <h1>{index + 1}</h1>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : null}
      <Box sx={{ display: "flex", gap: "1rem", mt: "3rem" }}>
        <Button variant="contained" color="primary" onClick={counter.increment}>
          Increment
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={counter.decrement}
          disabled={counter.count < 1}
        >
          Decrement
        </Button>
      </Box>
    </div>
  );
};
