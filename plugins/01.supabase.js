import { createClient } from '@supabase/supabase-js'
import { useConfigs } from '~/composables/helpers' 

export default defineNuxtPlugin(() => {
  const { supabaseUrl, supabaseKey } = useConfigs();
  const supabaseClient = createClient(supabaseUrl, supabaseKey)

  return {
    provide: {
      supabaseClient,
    },
  }
})