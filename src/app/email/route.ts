import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yrvhfolbguoebdcguptp.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Store securely in env

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  const { error } = await supabase.from("email").insert([{ email }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ success: true });
}