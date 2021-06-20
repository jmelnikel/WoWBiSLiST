-- Use these for deterinimg which items are not accounted for in DB.


-- THe result of these should be 0.
SELECT COUNT(*) FROM items
  WHERE item_class = 'Weapon'
  AND inventory_type != 'Two-Hand'
  AND inventory_type != 'Main Hand'
  AND inventory_type != 'One-Hand'
  AND inventory_type != 'Off Hand'
  AND inventory_type != 'Ranged'
  AND inventory_type != 'RANGEDRIGHT'
  AND inventory_type != 'Thrown';

SELECT COUNT(*) FROM items
  WHERE item_class = 'Armor'
  AND inventory_type != 'Head'
  AND inventory_type != 'Shoulder'
  AND inventory_type != 'Chest'
  AND inventory_type != 'Wrist'
  AND inventory_type != 'Hands'
  AND inventory_type != 'Waist'
  AND inventory_type != 'Legs'
  AND inventory_type != 'Feet'
  AND inventory_type != 'Neck'
  AND inventory_type != 'Back'
  AND inventory_type != 'Finger'
  AND inventory_type != 'Trinket'
  AND inventory_type != 'Off Hand'
  AND inventory_type != 'Held In Off-hand'
  AND inventory_type != 'Relic'
  AND inventory_type != 'Tabard'
  AND inventory_type != 'Non-equippable';


  CREATE TABLE users(users_key SERIAL PRIMARY KEY, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL, admin BOOL);
  
  INSERT INTO users (email, password, admin) VALUES ('jmelnikel@gmail.com', 'notMyPassword', true);


  CREATE TABLE sources(sources_key SERIAL PRIMARY KEY, item_name TEXT, location TEXT, creature TEXT);

  COPY sources(item_name, location, creature) FROM '/Users/jm-laptop/Desktop/sources.csv' DELIMITER ',' CSV HEADER;
