export const useConfigs = () => {
  const config = useRuntimeConfig();
  const url = config.public.supabaseUrl
  const key = config.public.supabaseKey

  const apiUrl = config.public.NUXT_PUBLIC_BASE_URL
  const websiteUrl = config.public.NUXT_PUBLIC_WEBSITE_URL
  
  return {
    supabaseUrl: url,
    supabaseKey: key,
    apiUrl,
    websiteUrl
  };
};

export const apiFetch = (path, options = {}, key) => {

  const { apiUrl } = useConfigs();

  return useFetch(
    path,
    {
      baseURL: apiUrl,
      ...options
    },
    key
  );
};