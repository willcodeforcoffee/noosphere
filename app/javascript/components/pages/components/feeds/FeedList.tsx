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
import React, { MouseEventHandler } from "react";

function onListItemClick(feed: Feed, event: MouseEventHandler<HTMLDivElement>) {
  console.log("[FeedList#onListItemClick]", feed, event);
}

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
    return (
      <ListItem
        key={feed.id}
        data-feed-id={feed.id}
        onClick={(event) => onListItemClick(feed, event)}
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={feed.name} />
      </ListItem>
    );
  });

  return (
    <div id="FeedList">
      <Typography variant="h2">News Feeds</Typography>
      <List>{feedListItems}</List>
    </div>
  );
}
