export const demo_cpp_code = `vector<vector<int>> adj;
int n;
int s;

queue<int> q;
vector<bool> used(n);
vector<int> d(n), p(n);

q.push(s);
used[s] = true;
p[s] = -1;
while (!q.empty()) {
    int v = q.front();
    q.pop();
    for (int u : adj[v]) {
        if (!used[u]) {
            used[u] = true;
            q.push(u);
            d[u] = d[v] + 1;
            p[u] = v;
        }
    }
}`

export const code_title = 'Implementing BFS'

export const DFS_CODE = `vector<vector<int>> adj;
int n; // number of vertices

vector<bool> visited;

void dfs(int v) {
    visited[v] = true;
    for (int u : adj[v]) {
        if (!visited[u])
            dfs(u);
    }
}`

export const CODES = [
  { title: code_title, code: demo_cpp_code },
  { title: 'Implementing DFS', code: DFS_CODE },
]
