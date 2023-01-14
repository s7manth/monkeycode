export const CODES = [
    {
        language: 'CPP',
        title: 'Breadth First Search',
        code: `
vector<vector<int>> adj;
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
}
`,
    },
    {
        language: 'CPP',
        title: 'Depth First Search',
        code: `
vector<vector<int>> adj;
int n; // number of vertices

vector<bool> visited;

void dfs(int v) {
    visited[v] = true;
    for (int u : adj[v]) {
        if (!visited[u])
            dfs(u);
    }
}
`,
    },
    {
        language: 'CPP',
        title: "Dijkstra's Algorithm",
        code: `
#include <iostream>
#include <vector>
#include <queue>
#include <utility>
using namespace std;

const int INF = 1e9;

vector<vector<pair<int, int>>> adj;
vector<int> dist;
priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

void dijkstra(int start) {
    dist.assign(adj.size(), INF);
    dist[start] = 0;
    pq.push({0, start});
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}
`,
    },
    {
        language: 'CPP',
        title: "Add two binary strings",
        code: `
#include <iostream>
#include <string>

std::string addBinary(std::string a, std::string b) {
    std::string result = "";
    int s = 0;
    int i = a.size() - 1, j = b.size() - 1;
    while (i >= 0 || j >= 0 || s == 1) {
        s += ((i >= 0) ? a[i] - '0' : 0);
        s += ((j >= 0) ? b[j] - '0' : 0);
        result = char(s % 2 + '0') + result;
        s /= 2;
        i--;
        j--;
    }
    return result;
}
`,
    },
    {
        language: 'Java',
        title: 'Depth First Search',
        code: `
import java.util.List;
import java.util.ArrayList;

class DFS {
    private static List<Integer>[] graph;
    private static boolean[] visited;

    public static void dfs(int start) {
        visited[start] = true;
        for (int neighbour : graph[start]) {
            if (!visited[neighbour]) {
                dfs(neighbour);
            }
        }
    }

    public static void main(String[] args) {
        int n = 5; // number of vertices
        graph = new ArrayList[n];
        visited = new boolean[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        // add edges here
        dfs(0);
    }
}
`,
    },
    {
        language: 'Python',
        title: 'Depth First Search',
        code: `
def dfs(graph, start, visited):
    visited[start] = True
    for neighbour in graph[start]:
        if not visited[neighbour]:
            dfs(graph, neighbour, visited)

graph = [[1, 2], [0, 3], [0, 3], [1, 2]]
visited = [False] * len(graph)
dfs(graph, 0, visited)
`,
    },
    {
        language: 'Go',
        title: 'DFS',
        code: `
package main

var graph [][]int
var visited []bool

func dfs(start int) {
    visited[start] = true
    for _, neighbour := range graph[start] {
        if !visited[neighbour] {
            dfs(neighbour)
        }
    }
}

func main() {
    graph = [][]int{{1, 2}, {0, 3}, {0, 3}, {1, 2}}
    visited = make([]bool, len(graph))
    dfs(0)
}
`,
    },
    {
        language: 'TS',
        title: 'Depth First Search',
        code: `
const graph = [[1, 2], [0, 3], [0, 3], [1, 2]];
const visited = new Array(graph.length).fill(false);

function dfs(start: number) {
    visited[start] = true;
    for (const neighbour of graph[start]) {
        if (!visited[neighbour]) {
            dfs(neighbour);
        }
    }
}

dfs(0);
`,
    },
    {
        language: 'Rust',
        title: 'Depth First Search',
        code: `
use std::vec::Vec;

struct Graph {
    adj_list: Vec<Vec<usize>>,
}

impl Graph {
    fn dfs(&self, start: usize, visited: &mut Vec<bool>) {
        visited[start] = true;
        for &neighbour in &self.adj_list[start] {
            if !visited[neighbour] {
                self.dfs(neighbour, visited);
            }
        }
    }
}
`,
    },
    {
        language: 'Rust',
        title: 'Generating a random number between 1 and 100',
        code: `
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let random_number = rng.gen_range(1, 101);
    println!("Random number: {}", random_number);
}
`,
    },
    {
        language: 'Rust',
        title: 'Implementing a simple struct',
        code: `
struct MyStruct {
    x: i32,
    y: i32,
}

impl MyStruct {
    fn new(x: i32, y: i32) -> MyStruct {
        MyStruct { x, y }
    }

    fn get_x(&self) -> i32 {
        self.x
    }

    fn set_x(&mut self, x: i32) {
        self.x = x;
    }

    fn get_y(&self) -> i32 {
        self.y
    }

    fn set_y(&mut self, y: i32) {
        self.y = y;
    }
}

fn main() {
    let mut my_struct = MyStruct::new(1, 2);
    my_struct.set_x(3);
    my_struct.set_y(4);
    println!("x: {}, y: {}", my_struct.get_x(), my_struct.get_y());
}        
`,
    },
    {
        language: 'Rust',
        title:
            'Calculating the factorial of a number',
        code: `
fn factorial(n: u64) -> u64 {
    if n == 0 {
        return 1;
    }
    n * factorial(n-1)
}

fn main() {
    let n = 5;
    println!("{}! = {}", n, factorial(n));
}
`,
    },
    {
        language: 'Rust',
        title: 'Implementing a simple thread pool',
        code: `
use std::sync::mpsc;
use std::thread;

fn thread_pool(size: usize) {
    let (tx, rx) = mpsc::channel();
    let mut workers = Vec::with_capacity(size);

    for id in 0..size {
        let tx = tx.clone();
        workers.push(thread::spawn(move || loop {
            let work = rx.recv().unwrap();
            println!("Worker {} got work: {:?}", id, work);
        }));
    }

    for work in 0..10 {
        tx.send(work).unwrap();
    }

    for worker in workers {
        worker.join().unwrap();
    }
}

fn main() {
    thread_pool(3);
}
`,
    },
    {
        language: 'TS',
        title:
            'Counting the occurrences of words in a string',
        code: `
use std::collections::HashMap;

fn main() {
    let text = "this is a test of the word counting system";
    let mut word_counts = HashMap::new();

    for word in text.split_whitespace() {
        let count = word_counts.entry(word).or_insert(0);
        *count += 1;
    }

    for (word, count) in word_counts.iter() {
        println!("{}: {}", word, count);
    }
}
`,
    },
    {
        language: 'TS',
        title:
            'A class that represents a person',
        code: `
class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet() {
        console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
    }
}
    
let person = new Person("John", 30);
person.greet();
`,
    },
    {
        language: 'TS',
        title:
            'Average of all even numbers in the array',
        code: `
function averageOfEvenNumbers(numbers: number[]): number {
    let evenNumbers = numbers.filter(n => n % 2 === 0);
    let sum = evenNumbers.reduce((a, b) => a + b, 0);
    return sum / evenNumbers.length;
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(averageOfEvenNumbers(numbers));        
`,
    },
    {
        language: 'TS',
        title:
            'Occurrences of characters in a string',
        code: `
let text = "this is a test of the character counting system";
let characterCounts = new Map<string, number>();

for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let count = characterCounts.get(char) || 0;
    characterCounts.set(char, count + 1);
}

for (let [char, count] of characterCounts) {
    console.log(\`'\${char}': \${count}\`);
}
`,
    },
    {
        language: 'TS',
        title:
            'Execution time of a function',
        code: `
function measureExecutionTime(target: any, key: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        let start = performance.now();
        let result = originalMethod.apply(this, args);
        let end = performance.now();

        console.log(\`\${key} execution time: \${end - start}ms\`);

        return result;
    }
}

class Example {
    @measureExecutionTime
    public longRunningMethod() {
        // some time-consuming code here
    }
}  
`,
    },
    {
        language: 'Java',
        title: '"Hello, World!"',
        code: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}        
`,
    },
    {
        language: 'Java',
        title:
            'A class that represents a bank account',
        code: `
public class BankAccount {
    private int accountNumber;
    private double balance;

    public BankAccount(int accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0.0;
    }

    public void deposit(double amount) {
        this.balance += amount;
    }

    public void withdraw(double amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            System.out.println("Insufficient funds.");
        }
    }

    public double getBalance() {
        return this.balance;
    }
}      
`,
    },
    {
        language: 'Java',
        title:
            'ArrayList to store a list of names',
        code: `
import java.util.ArrayList;

public class NameList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<String>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        for (String name : names) {
            System.out.println(name);
        }
    }
}       
`,
    },
    {
        language: 'Java',
        title:
            'Dictionary of words and their definitions',
        code: `
import java.util.HashMap;
import java.util.Scanner;

public class Dictionary {
    public static void main(String[] args) {
        HashMap<String, String> dictionary = new HashMap<String, String>();
        dictionary.put("hello", "a greeting");
        dictionary.put("world", "the planet on which we live");
        dictionary.put("java", "a popular programming language");

        Scanner input = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String word = input.nextLine();

        if (dictionary.containsKey(word)) {
            System.out.println(dictionary.get(word));
        } else {
            System.out.println("Word not found.");
        }
    }
}     
`,
    },
    {
        language: 'Python',
        title: 'Factorial of a number',
        code: `
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))
`,
    },
    {
        language: 'Python',
        title: 'A simple rectangle class',
        code: `
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

rect = Rectangle(5, 10)
print(rect.area())
print(rect.perimeter())
`,
    },
    {
        language: 'Python',
        title:
            'Neural network that predicts the price of a house',
        code: `
import tensorflow as tf
from sklearn.datasets import load_boston
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load the Boston Housing dataset
data = load_boston()
X_train, X_test, y_train, y_test = train_test_split(data.data, data.target, test_size=0.3)

# Scale the input features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Create the model
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(1)
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train the model
model.fit(X_train, y_train, epochs=100)

# Evaluate the model
test_loss = model.evaluate(X_test, y_test)
print(f"Test Loss: {test_loss}")
`,
    },
    {
        language: 'Python',
        title:
            'Extracting information from a website',
        code: `
import requests
from bs4 import BeautifulSoup

url = 'https://www.example.com'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Extract the title of the page
title = soup.find('title').get_text()
print("Title:", title)

# Extract all the links on the page
links = soup.find_all('a')
for link in links:
    print(link.get('href'))
`,
    },
]
