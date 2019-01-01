INSERT INTO `account`
(`email`,`first_name`,`user_name`,`is_confirmed`,`is_in_session`,`is_disabled`,`scope`)
VALUES
(?,?,?,?,?,?,?)
ON DUPLICATE KEY UPDATE
`email`=VALUES(`email`),
`first_name`=VALUES(`first_name`),
`user_name`=VALUES(`user_name`),
`is_confirmed`=VALUES(`is_confirmed`),
`is_in_session`=VALUES(`is_in_session`),
`is_disabled`=VALUES(`is_disabled`),
`scope`=VALUES(`scope`);
