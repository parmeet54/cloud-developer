export const config = {
  dev: {
    username: "udagramsinghdev1",
    password: "RecoveryMNM54",
    database: "udagramsinghdev1",
    host: "udagramdb.cnhf2ck6mcsk.us-west-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-2",
    aws_profile: "default",
    aws_media_bucket: "udagram-ruttner-dev",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
