const API_BASE = 'http://localhost:4000'

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token')

  const headers = new Headers(options.headers || {})
  headers.set('Content-Type', 'application/json')

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  })

  if (response.status === 401) {
    localStorage.removeItem('token')
    window.location.href = '/admin/login'
  }

  return response
}