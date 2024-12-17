// import { authExchange } from '@urql/exchange-auth'
import { createClient, cacheExchange, fetchExchange } from '@urql/vue'
import type { Client } from '@urql/vue'

// import { authConfig } from '@/services/authConfig'

const API_URL = import.meta.env.VITE_APP_API_URL as string

export function makeClient(): Client {
  return createClient({
    url: `${API_URL}/graphql/`,
    exchanges: [
      cacheExchange,
      // authExchange(authConfig),
      fetchExchange,
    ],
  })
}
