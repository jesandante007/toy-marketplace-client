import React from "react";

const Blog = () => {
  return (
    <div className="my-bg space-y-10 p-10 lg:p-20">
      <p className="text-4xl lg:text-5xl font-semibold text-tdeep">
        Latest Articles
      </p>
      <div className="my-bg p-5 shadow">
        <p className="text-xl font-medium mb-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </p>
        <p className="text-gray-500 ">
          Access token and refresh token are commonly used in authentication and
          authorization systems. Access token and refresh token both are secret
          key. Both are issued by server on the client side after successfully
          login. Access token usually used to secure data from non authenticated
          user. Access tokens are typically short-lived and have an expiration
          time. Refresh token is used to obtain a new access token when the
          current access token expires. <br />
          We can store them in the browser's localStorage or sessionStorage. But
          this is not secure place to store. To securely store these secret key
          we should use HTTP-only cookie. So it can only be accessed by the
          server.
        </p>
      </div>
      <div className="my-bg p-5 shadow">
        <p className="text-xl font-medium mb-2">
          Compare SQL and NoSQL databases?
        </p>
        <p className="text-gray-500">
          SQL databases are relational, and NoSQL databases are non-relational.{" "}
          <br />
          SQL databases use structured query language (SQL) and have a
          predefined schema. NoSQL databases have dynamic schemas for
          unstructured data. <br />
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. <br />
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores. <br />
          SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="my-bg p-5 shadow">
        <p className="text-xl font-medium mb-2">
          What is express js? What is Nest JS?
        </p>
        <p className="text-gray-500">
          Express.js is a lightweight and flexible web application framework for
          Node.js, offering simplicity and ease of use in handling routes,
          requests, and middleware. It provides a minimalist approach to
          building web servers and APIs. On the other hand, Nest.js is a
          TypeScript-based framework built on top of Express.js, providing a
          more structured and opinionated approach to application development.
          It emphasizes modularity, dependency injection, and scalable
          architecture, making it suitable for building complex and maintainable
          server-side applications. Nest.js integrates seamlessly with other
          libraries and frameworks, providing a comprehensive toolset for
          efficient and scalable application development.
        </p>
      </div>
      <div className="my-bg p-5 shadow">
        <p className="text-xl font-medium mb-2">
          What is MongoDB aggregate and how does it work?
        </p>
        <p className="text-gray-500">
          MongoDB's aggregation framework is a powerful tool that enables data
          analysis and aggregation operations on collections of documents. It
          works by applying a series of stages to transform and process data in
          a pipeline-like fashion. Each stage performs specific operations using
          a wide range of operators, allowing for filtering, grouping, sorting,
          and transforming data. The framework provides flexibility in reshaping
          and summarizing data, while also optimizing performance by leveraging
          indexes. With MongoDB's aggregation framework, you can perform complex
          data manipulations and analysis directly within the database, reducing
          the need for additional processing in the application layer.
        </p>
      </div>
    </div>
  );
};

export default Blog;
