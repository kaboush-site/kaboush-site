// =====================================================================
//  إعدادات Supabase — الملف الوحيد اللي تحط فيه بيانات الربط
// =====================================================================
//  من لوحة Supabase:  Project Settings  >  API
//
//  url      : رابط المشروع (Project URL)
//             شكله:  https://xxxxxxxxxxxxxxxx.supabase.co
//
//  anonKey  : المفتاح العام (anon / public key)
//             ده مفتاح عام ومسموح يتحط في الموقع، والحماية الحقيقية
//             جاية من سياسات RLS اللي في ملف supabase-setup.sql.
//
//  ⚠️ ممنوع تحط هنا مفتاح service_role نهائيًا.
// =====================================================================
window.KABOUSH_SUPABASE_CONFIG = {
  url: 'https://eamrvgwxxdwdwdrmleyy.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhbXJ2Z3d4eGR3ZHdkcm1sZXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1NDUwMDMsImV4cCI6MjEwOTEyMTAwM30.sLegbzpnUCKKPkWUs0n78W1BKlFQB7LMRR49sKlomp0',
  storageBucket: 'store-images'   // لا تغيّره إلا لو غيرت اسم الـ bucket في ملف الـ SQL
};
