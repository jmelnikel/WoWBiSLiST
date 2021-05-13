CREATE DATABASE wowbislist;

CREATE TABLE items(
  item_key SERIAL PRIMARY KEY,
  id INT,
  name VARCHAR(80),
  item_class VARCHAR(24),
  item_subclass VARCHAR(24),
  inventory_type VARCHAR(24)
);