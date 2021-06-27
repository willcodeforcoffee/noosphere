import { useListFeedsQuery } from "components/graphql/SchemaGenerated";
import * as React from "react";

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

  const feeds = data.feeds?.map((feed) => {
    return (
      <div key={feed.id} data-feed-id={feed.id}>
        <a href={feed.url} target="_blank">
          {feed.name}
        </a>
      </div>
    );
  });

  return (
    <div id="FeedList">
      <h2>FeedList</h2>
      {feeds}
    </div>
  );
}
