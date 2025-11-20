"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/todos");
      if (!response.ok) {
        throw new Error("Todo 목록을 불러오는데 실패했습니다.");
      }
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: newTodo.trim() })
      });

      if (!response.ok) {
        throw new Error("Todo 추가에 실패했습니다.");
      }

      const todo = await response.json();
      setTodos([...todos, todo]);
      setNewTodo("");
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleTodo = async (id: number, completed: boolean) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: !completed })
      });

      if (!response.ok) {
        throw new Error("Todo 업데이트에 실패했습니다.");
      }

      const updatedTodo = await response.json();
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Todo 삭제에 실패했습니다.");
      }

      setTodos(todos.filter((todo) => todo.id !== id));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo 목록</CardTitle>
        <CardDescription>할 일을 추가하고 관리하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleAddTodo} className="mb-4 flex gap-2">
          <Input
            type="text"
            placeholder="새로운 Todo를 입력하세요..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            disabled={submitting}
            className="flex-1"
          />
          <Button type="submit" disabled={submitting || !newTodo.trim()}>
            추가
          </Button>
        </form>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">로딩 중...</div>
        ) : todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Todo가 없습니다. 새로운 Todo를 추가해보세요!
          </div>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center gap-3 rounded-md border border-gray-200 dark:border-gray-700 p-3 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id, todo.completed)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span
                  className={`flex-1 ${todo.completed ? "text-gray-500 line-through dark:text-gray-400" : "text-gray-900 dark:text-gray-100"}`}
                >
                  {todo.title}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  삭제
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
