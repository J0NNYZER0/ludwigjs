UPDATE `account`
  SET
    `is_confirmed` = ?,
    `is_in_session` = ?
    WHERE `email` = ?;
