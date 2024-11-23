"use server";
import { createClient } from "@/lib/supabase.server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  // Getting the current state of the form and the form data
  const name = formData.get("fullname");
  const email = formData.get("email");
  const password = formData.get("password");
  const cpassword = formData.get("cpassword");

  //Checking if one of the fields is empty
  if (!name || !email || !password || !cpassword) {
    return "All fields are required";
  }

  // checking if the password and confirm password match
  if (password !== cpassword) {
    return "Passwords do not match";
  }

  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Authenticating the user
  const { data, error: authError } = await supabase.auth.signUp({
    email: email.toString(),
    password: password.toString(),
    options: {
      data: {
        full_name: name.toString(),
      },
    },
  });

  // Handling auth error
  if (authError) {
    console.log(authError);

    return authError.message;
  }

  // Inserting user to database
  const { error: insertError } = await supabase.from("users").insert([
    {
      full_name: data.user?.user_metadata.full_name,
      id: data.user?.id,
      email: data?.user?.email,
    },
  ]);

  // Handling insert error
  if (insertError) {
    console.log(insertError);
    return insertError.message;
  }

  // Redirect to dashboard
  redirect("/dashboard/ai");
}

export async function signIn(formData: FormData) {
  // Getting the current state of the form and the form data
  const email = formData.get("email");
  const password = formData.get("password");

  //Checking if one of the fields is empty
  if (!email || !password) {
    return "All fields are required";
  }

  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Authenticating the user
  const { data, error: authError } = await supabase.auth.signInWithPassword({
    email: email.toString(),
    password: password.toString(),
  });

  // Handling auth error
  if (authError) {
    console.log(authError);

    return authError.message;
  }

  // Redirect to dashboard
  redirect(`/dashboard/profile/${data.user.id}`);
}

export async function isAuth() {
  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  return await supabase.auth.getUser();
}

export async function signOut() {
  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.auth.signOut();
  redirect("/");
}

export async function getCurrentUserData() {
  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) return null;

  if (!userData) return null;
  let { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("user_id", userData.user?.id)
    .order("created_at", { ascending: false });

  return {
    id: userData.user?.id,
    full_name: userData.user?.user_metadata.full_name,
    courses: data,
  };
}

export async function navigate(path: string) {
  redirect(path);
}
