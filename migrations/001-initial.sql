--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Duration (
  id INTEGER PRIMARY KEY,
  origin_address TEXT NOT NULL,
  destination_address TEXT NOT NULL,
  distance TEXT NOT NULL,
  duration TEXT NOT NULL,
  duration_in_traffic TEXT NOT NULL,
  status TEXT NOT NULL,
  upperLevelStatus TEXT NOT NULL,
  timestamp TEXT NOT NULL
);


--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Duration;