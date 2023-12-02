import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supebase = createClient(
  "https://exhquhruufkudwigmieo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4aHF1aHJ1dWZrdWR3aWdtaWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NzQyMDUsImV4cCI6MjAxNzA1MDIwNX0.zQtxA-xnNEy2tAUJWxWQNXAMqXw2U8PpX9kzwhBwu8A"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionContextProvider supabaseClient={supebase}>
    <App />
  </SessionContextProvider>
)
