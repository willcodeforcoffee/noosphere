import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import { Feed, useListFeedsQuery } from "components/graphql/SchemaGenerated";
import { Routes } from "components/Router";
import React, { forwardRef, MouseEvent, useMemo } from "react";
import { Link as RouterLink, generatePath } from "react-router-dom";

// function onListItemClick(
//   feed: Pick<Feed, "id" | "name" | "url" | "lastPollAt">,
//   event: MouseEvent<HTMLLIElement>
// ) {
//   console.log("[FeedList#onListItemClick]", feed, event);
// }

export function FeedList(): JSX.Element {
  const { data, loading, error } = useListFeedsQuery();

  if (loading) {
    return <div>TODO LOADING WIDGET</div>;
  }

  if (error) {
    console.error("[FeedList]  ListFeeds error", error);
    return <div>TODO APOLLOERROR WIDGET</div>;
  }

  console.log("[FeedList]  data", data);

  const feedListItems = data.feeds?.map((feed) => {
    const to = generatePath(Routes.Social.Feed, { id: feed.id });

    return (
      <RouterLink key={feed.id} to={to}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={feed.name} />
        </ListItem>
      </RouterLink>
    );
  });

  return (
    <div id="FeedList">
      <Typography variant="h2">News Feeds</Typography>
      <List>{feedListItems}</List>
    </div>
  );
}
