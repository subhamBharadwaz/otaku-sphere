alter table "public"."favorite_animes" drop constraint "favorite_animes_user_id_fkey";

alter table "public"."profiles" drop constraint "profiles_pkey";

drop index if exists "public"."profiles_pkey";

drop table "public"."profiles";

create table "public"."profile" (
    "id" uuid not null,
    "display_name" text,
    "email" text not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."profile" enable row level security;

alter table "public"."favorite_animes" add column "link" text;

alter table "public"."favorite_animes" add column "name" text;

alter table "public"."favorite_animes" add column "poster" text;

CREATE UNIQUE INDEX profile_email_key ON public.profile USING btree (email);

CREATE UNIQUE INDEX profile_pkey ON public.profile USING btree (id);

alter table "public"."profile" add constraint "profile_pkey" PRIMARY KEY using index "profile_pkey";

alter table "public"."profile" add constraint "profile_email_key" UNIQUE using index "profile_email_key";

alter table "public"."profile" add constraint "profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profile" validate constraint "profile_id_fkey";

alter table "public"."favorite_animes" add constraint "favorite_animes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profile(id) ON DELETE CASCADE not valid;

alter table "public"."favorite_animes" validate constraint "favorite_animes_user_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_profile_for_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  INSERT INTO public.profile (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;$function$
;

create policy "Enable all actions for users based on user_id"
on "public"."favorite_animes"
as permissive
for all
to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));


create policy "Enable insert for authenticated users only"
on "public"."favorite_animes"
as permissive
for insert
to authenticated
with check (true);


create policy "Can only update own profile data."
on "public"."profile"
as permissive
for update
to public
using ((auth.uid() = id));


create policy "Can only view own profile data."
on "public"."profile"
as permissive
for select
to public
using ((auth.uid() = id));



