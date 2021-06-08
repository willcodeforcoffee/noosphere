# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_08_022915) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "communication_notification_pushovers", force: :cascade do |t|
    t.string "title"
    t.string "message", null: false
    t.string "device"
    t.string "status", null: false
    t.datetime "sent_at"
    t.integer "retries", default: 0, null: false
    t.json "receipt"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "features", force: :cascade do |t|
    t.string "name", limit: 30
    t.boolean "enabled", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_features_on_name", unique: true
  end

  create_table "feeds", force: :cascade do |t|
    t.string "name", null: false
    t.string "url", null: false
    t.interval "polling_interval", default: "PT12H", null: false
    t.datetime "last_poll_at"
    t.datetime "next_poll_at"
    t.text "last_document"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pages", force: :cascade do |t|
    t.string "url", limit: 255, null: false
    t.string "title", null: false
    t.string "description"
    t.datetime "published_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["published_at"], name: "index_pages_on_published_at"
    t.index ["url"], name: "index_pages_on_url", unique: true
  end

  create_table "user_credentials", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["confirmation_token"], name: "index_user_credentials_on_confirmation_token", unique: true
    t.index ["email"], name: "index_user_credentials_on_email", unique: true
    t.index ["reset_password_token"], name: "index_user_credentials_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_user_credentials_on_unlock_token", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", limit: 30, null: false
    t.string "email_address", null: false
    t.string "state", limit: 25, null: false
    t.bigint "user_credential_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "roles", array: true
    t.index ["user_credential_id"], name: "index_users_on_user_credential_id"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "users", "user_credentials"
end
