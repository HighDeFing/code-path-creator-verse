import { createClient } from '@supabase/supabase-js';

const URL = 'https://ydkswsirpbienkxachyn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlka3N3c2lycGJpZW5reGFjaHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4MTE3NjEsImV4cCI6MjA0MDM4Nzc2MX0.9L4R96C-76WfGIpZ375Vssw0VAUaaiH_jhWl8szDntE';
export const supabase = createClient(URL, API_KEY);

