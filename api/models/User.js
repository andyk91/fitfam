const knex = require("../db");
const Model = require("objection").Model;
const Workout = require("../models/Workout");

module.exports = class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    return {
      workouts: {
        relation: Model.HasManyRelation,
        modelClass: Workout,
        join: {
          from: "users.id",
          to: "workouts.user_id"
        }
      }
    };
  }
};
