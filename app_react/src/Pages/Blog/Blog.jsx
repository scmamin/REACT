import styles from "./Blog.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <>
      <Layout>
        <div className={styles.blog}>
          <h2>Список постов</h2>
          <ul>
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
