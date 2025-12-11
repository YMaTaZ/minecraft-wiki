import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Minecraft Wiki"
      description="原版 Minecraft Java 各版本资料整理">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">🧱 Minecraft Wiki</h1>
          <p className="hero__subtitle">全版本 Java 原版更新资料速查站</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/1.21/intro">
              🚀 查看最新 1.21 更新
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>📘 所有版本</h3>
                <p>从 1.12 到 1.21，每个版本都有清晰文档结构。</p>
                <Link to="/docs/1.12/intro">👉 从 1.12 开始阅读</Link>
              </div>
              <div className="col col--4">
                <h3>🔎 快速搜索</h3>
                <p>页面右上角搜索框支持关键词实时定位内容。</p>
              </div>
              <div className="col col--4">
                <h3>🌙 暗色主题</h3>
                <p>暗色视觉体验，适合长时间阅读。</p>
                <a href="https://github.com/YMaTaZ/minecraft-wiki" target="_blank">
                  🛠 GitHub 源码
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
