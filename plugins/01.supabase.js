import { createClient } from '@supabase/supabase-js'
import { useConfigs } from '~/composables/helpers' 

export default defineNuxtPlugin(() => {
const { supabaseUrl, supabaseKey } = useConfigs();
  
  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    provide: {
      supabase,
    },
  }
})