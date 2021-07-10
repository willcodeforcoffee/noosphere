import { Typography } from "@material-ui/core";
import * as React from "react";
import { useStyles } from "./Feed.style";
import { useParams } from "react-router-dom";
import { useGetFeedQuery } from "components/graphql/SchemaGenerated";
import { GraphQLErrorMessage, LoadingSpinner } from "../../widgets";

export function Feed(): JSX.Element {
  let { id } = useParams();
  const classes = useStyles();
  console.log("[Feed]  id:", id);
  const { data, loading, error } = useGetFeedQuery({ variables: { id: id } });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.error("[FeedList]  ListFeeds error", error);
    return <GraphQLErrorMessage error={error} />;
  }

  return (
    <main className={classes.root}>
      <Typography variant="h1" noWrap={true}>
        {data?.feed?.name}
      </Typography>
    </main>
  );
}
