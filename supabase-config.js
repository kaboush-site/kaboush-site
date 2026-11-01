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
  url: 'ADD_SUPABASE_PROJECT_URL',
  anonKey: 'ADD_SUPABASE_ANON_KEY',
  storageBucket: 'store-images'   // لا تغيّره إلا لو غيرت اسم الـ bucket في ملف الـ SQL
};
