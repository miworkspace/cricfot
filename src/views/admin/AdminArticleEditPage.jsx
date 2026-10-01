'use client';
import { useState, useEffect } from "react";
import { ArticleEditor } from "../../components/admin/ArticleEditor";
import { AdminService } from "../../services/adminService";
import { AdminLoading, AdminError } from "../../components/admin/AdminEmptyState";
import { useRouter } from "../../router/RouterContext";
export const AdminArticleEditPage = ({
  isNew: propIsNew,
  articleId: propArticleId
}) => {
  const { currentPath, navigate } = useRouter();
  const isNew = propIsNew !== void 0 ? propIsNew : currentPath.endsWith("/new") || currentPath === "/admin/articles/new";
  const articleId = propArticleId || (!isNew ? currentPath.split("/").pop() : null);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(!isNew);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!isNew && articleId) {
      setIsLoading(true);
      AdminService.getArticleById(articleId).then((data) => {
        if (data) {
          setArticle(data);
        } else {
          setError("Article not found.");
        }
      }).catch((err) => {
        setError(err?.message || "Failed to retrieve article details.");
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [isNew, articleId]);
  if (isLoading) {
    return <AdminLoading message="Loading article editor..." />;
  }
  if (error) {
    return <AdminError
      message={error}
      onRetry={() => navigate("/admin/articles")}
    />;
  }
  return <ArticleEditor initialArticle={article} isNew={isNew} />;
};
