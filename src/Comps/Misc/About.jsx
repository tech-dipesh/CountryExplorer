import React from 'react'
import { Link } from 'react-router'
import style from "./About.module.css"
export default function About() {
  return (
    <div className={style.aboutContainer}>
      <header className={style.aboutHeader}>
        <h1>React Learning Notes 📝</h1>
        <p>Personal documentation while learning React + Vite</p>
      </header>

      <main className={style.aboutContent}>
        <section className={style.section}>
          <h2>General React Concepts</h2>
          <article>
            <h3>Key Props</h3>
            <p><strong>Warning:</strong> Never use array index as key prop. When items are deleted, indices shift and cause rendering issues. Always use unique IDs.</p>
          </article>

          <article>
            <h3>State Management</h3>
            <ul>
              <li>Lift state up to parent when multiple components need the same data</li>
              <li>Arrays are objects in JavaScript (typeof doesn't distinguish them)</li>
              <li>For state updates based on previous value, use callbacks</li>
            </ul>
          </article>
        </section>

        <section className={style.section}>
          <h2>Routing (react-router-dom)</h2>
          <article>
            <h3>Dynamic Routes</h3>
            <p>Use <code>path="/:about"</code> to create dynamic routes that catch any URL pattern.</p>
          </article>

          <article>
            <h3>Best Practices</h3>
            <p>Use <code>&lt;Link&gt;</code> instead of <code>&lt;a&gt;</code> tags for proper hot module replacement.</p>
          </article>
        </section>

        <section className={style.section}>
          <h2>Data Fetching</h2>
          <article>
            <h3>Loading States</h3>
            <p>Always implement loading indicators based on state values before content appears.</p>
          </article>

          <article>
            <h3>Shimmer Effect</h3>
            <p>Create skeleton loaders using:</p>
            <pre><code>Array.from(&#123;length: 10&#125;)</code></pre>
          </article>
        </section>

        <section className={style.section}>
          <h2>Dark Mode Implementation</h2>
          <article>
            <h3>Recommended Approach</h3>
            <ul>
              <li>Use state management instead of direct DOM manipulation</li>
              <li>Apply className conditionally based on state</li>
              <li>Never use <code>document.documentElement.setAttribute()</code> in React</li>
            </ul>
          </article>
        </section>

        <section className={style.section}>
          <h2>Context API</h2>
          <article>
            <h3>When to Use</h3>
            <p>Perfect for avoiding props drilling when passing data through multiple component levels.</p>
          </article>

          <article>
            <h3>Quick Setup</h3>
            <ol>
              <li>Create context with <code>createContext()</code></li>
              <li>Wrap app with <code>Provider</code></li>
              <li>Access with <code>useContext()</code> hook</li>
            </ol>
          </article>
        </section>

        <section className={style.section}>
          <h2>Custom Hooks</h2>
          <p>Reusable component logic extracted into separate functions. Export and import instead of duplicating code.</p>
        </section>
      </main>

      <footer className={style.aboutFooter}>
        <Link to='/home' className={style.homeButton}>Go To Homepage</Link>
        <p className={style.lastUpdated}>Last updated: December 2025</p>
      </footer>
    </div>
  )
}