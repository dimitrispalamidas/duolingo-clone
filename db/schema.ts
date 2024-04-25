import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});
