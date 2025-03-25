export const useConfigs = () => {
    const config = useRuntimeConfig();
    return {
      supabaseUrl: config.supabaseKey,
      websiteUrl: config.public.supabaseUrl,
    };
  };

export const apiFetch = async () => {
    const { supabaseUrl, supabaseKey } = useConfigs();
}