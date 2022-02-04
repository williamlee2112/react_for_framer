function Twitter(state) {

    // If we are not logged in, we show a login screen
    if (!state.logged_in) {
      return <div>Login: <input /></div>
    }
  
    // Build the feed from tweets to use below
    const feed = state.feed.map(item => (
      <div>{item.name}: {item.tweet}</div>
    ));
  
    return (
      <div>
        <button enabled={state.selected_tab !== "feed"}>Feed</button>
        <button enabled={state.selected_tab !== "notifications"}>Notifications</button>
        <button enabled={state.selected_tab !== "messages"}>Messages</button>
        {state.feed_loading ? <div>Loading</div> : feed}
      </div>
    );
  }