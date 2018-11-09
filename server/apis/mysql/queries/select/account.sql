SELECT `account`.`id`,
  `account`.`email`,
  `account`.`first_name`,
  `account`.`user_name`,
  `account`.`is_confirmed`,
  `account`.`is_in_session`,
  `account`.`created`
FROM `account`
WHERE `account`.`email` = ?;
