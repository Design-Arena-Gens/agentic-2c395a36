'use client';

import { useCallback, useEffect, useMemo, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  focus?: string;
};

const focusOptions = [
  { value: "ai", label: "AI Systems" },
  { value: "frontend", label: "Frontend Architecture" },
  { value: "backend", label: "Backend & APIs" },
  { value: "devops", label: "DevOps & Reliability" }
];

export function AIAssistant() {
  const [focus, setFocus] = useState<string>("ai");
  const [input, setInput] = useState<string>("");
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hey there — I’m Nova, an AI copilot infused with Alex’s approach to product design and engineering. Ask about workflows, architecture, or AI strategy to get tailored insights.",
      focus: "ai"
    }
  ]);

  const submitPrompt = useCallback(
    async (prompt: string) => {
      if (!prompt.trim()) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: prompt,
        focus
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsThinking(true);

      try {
        const response = await fetch("/api/ai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ prompt, focus })
        });

        if (!response.ok) {
          throw new Error("Failed to fetch insight");
        }

        const data = (await response.json()) as { response: string; focus: string };
        const assistantMessage: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.response,
          focus: data.focus
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "Looks like something went sideways. Try again in a moment or ping me directly at alex@mercer.dev."
          }
        ]);
        console.error(error);
      } finally {
        setIsThinking(false);
      }
    },
    [focus]
  );

  const placeholder = useMemo(() => {
    if (focus === "frontend") return "Ask about UI systems, performance, or DX...";
    if (focus === "backend") return "Ask about APIs, data modeling, or scaling...";
    if (focus === "devops") return "Ask about observability, CI/CD, or SRE...";
    return "Ask about agents, ML workflows, or applied AI...";
  }, [focus]);

  useEffect(() => {
    if (messages.length > 1) {
      const container = document.querySelector("[data-ai-chat]");
      container?.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <section className="border-y border-white/10 bg-base/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">AI Copilot</p>
          <h2 className="text-3xl font-semibold text-white">
            Explore ideas with Nova, my AI-infused collaborator.
          </h2>
          <p className="text-sm text-slate-300">
            Nova blends my playbooks for building AI products with a deterministic agent. She helps
            teams reason through roadmap bets, architecture choices, and product strategy.
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>• Discover high-leverage workflows to automate</li>
            <li>• De-risk architecture decisions across the stack</li>
            <li>• Translate ambiguous ideas into experiment-ready briefs</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            {focusOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFocus(option.value)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  focus === option.value
                    ? "border-accent bg-accent/20 text-white"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-accent/40 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex h-80 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <div className="flex-1 space-y-4 overflow-y-auto p-6" data-ai-chat>
              {messages.map((message) => (
                <div key={message.id} className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">
                    {message.role === "assistant" ? "Nova" : "You"}
                    {message.focus ? ` · ${message.focus}` : ""}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      message.role === "assistant" ? "text-slate-200" : "text-white"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}
              {isThinking ? (
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Nova typing…</p>
              ) : null}
            </div>
            <form
              className="border-t border-white/10 bg-base/80 p-4"
              onSubmit={(event) => {
                event.preventDefault();
                submitPrompt(input);
              }}
            >
              <div className="flex gap-3">
                <input
                  className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none"
                  placeholder={placeholder}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <button
                  type="submit"
                  disabled={isThinking}
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-base transition hover:bg-accent/80 disabled:opacity-50"
                >
                  {isThinking ? "Thinking…" : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
