CREATE DATABASE IF NOT EXISTS bluetkids
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE bluetkids;

CREATE TABLE IF NOT EXISTS enrollments (
  id                INT           NOT NULL AUTO_INCREMENT,

  -- Child info
  child_name        VARCHAR(150)  NOT NULL,
  child_age         INT           NOT NULL,
  child_dob         DATE          NOT NULL,
  kid_schedule      VARCHAR(20)   NOT NULL COMMENT 'regular | extendido',

  -- Medical
  has_condition     VARCHAR(5)    NOT NULL COMMENT 'no | si',
  condition_detail  TEXT,
  has_allergy       VARCHAR(5)    NOT NULL COMMENT 'no | si',
  allergy_detail    TEXT,

  -- Parents
  dad_name          VARCHAR(150)  NOT NULL,
  dad_phone         VARCHAR(30)   NOT NULL,
  mom_name          VARCHAR(150)  NOT NULL,
  mom_phone         VARCHAR(30)   NOT NULL,

  -- Emergency contact
  emergency_name      VARCHAR(150)  NOT NULL,
  emergency_phone     VARCHAR(30)   NOT NULL,
  emergency_relation  VARCHAR(100)  NOT NULL,

  -- Other
  address           VARCHAR(300)  NOT NULL,
  message           TEXT,

  -- Admin
  status            VARCHAR(20)   NOT NULL DEFAULT 'pending' COMMENT 'pending | contacted | enrolled',
  created_at        DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
