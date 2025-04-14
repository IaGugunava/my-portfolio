export const useConfigs = () => {
  const config = useRuntimeConfig();
  const url = config.public.supabaseUrl
  const key = config.public.supabaseKey
  
  return {
    supabaseUrl: url,
    supabaseKey: key,
  };
};

export const apiFetch = async () => {
  // const { supabaseUrl, supabaseKey } = useConfigs();


}