import React from "react";
import { useTitle } from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            Difference Between SQL & NoSQL
          </h1>
        </div>
        <div className="mx-11 mb-4 text-lg text-gray-500">
          <p>
            <ul className="list-decimal">
              <li>
                SQL databases are relational, NoSQL databases are
                non-relational.
              </li>
              <li>
                SQL databases use structured query language and have a
                predefined schema. NoSQL databases have dynamic schemas for
                unstructured data.
              </li>
              <li>
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable.
              </li>
              <li>
                SQL databases are table-based, while NoSQL databases are
                document, key-value, graph, or wide-column stores.
              </li>
              <li>
                SQL databases are better for multi-row transactions, while NoSQL
                is better for unstructured data like documents or JSON.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            What is JWT and How Does it Work?
          </h1>
        </div>
        <div className="mx-11 mb-4 text-lg text-gray-500">
          <div>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. <br />
            Each JWT contains encoded JSON objects, including a set of claims.
            JWTs are signed using a cryptographic algorithm to ensure that the
            claims cannot be altered after the token is issued <br />
            <span className="my-4 text-xl font-bold text-black">
              How JWT Works: <br />
            </span>
            A JWT is a string made up of three parts, separated by dots (.), and
            serialized using base64. In the most common serialization format,
            compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz <br />
            <strong>Once Decoded You will get Two strings: </strong>
            <ul className="list-decimal">
              <li>The payload contains the claims</li>
              <li>The signature ensures that the token hasn't been altered</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            What is the difference between javascript and NodeJS
          </h1>
        </div>
        <div className="mx-11 mb-4 text-lg text-gray-500">
          <p>
            <ol className="list-decimal">
              <li>
                JavaScript is a programming language, which runs in web
                browsers. <br />
                Whereas Node.js is an interpreter or running environment for
                JavaScript, which holds a lot of requiring libraries and all.{" "}
                <br />
              </li>

              <li>
                JavaScript is a simple programming language that could be run in
                any browser that supports the JavaScript Engine. <br /> On the
                other hand, Node.js is a running environment or interpreter for
                the JavaScript programming language
              </li>
              <li>
                JavaScript can run on any engine, including Firefox's Spider
                Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a
                result, JavaScript programming is very simple to create, and any
                running environment is equivalent to a proper browser.
                <br />
                On the other hand, Node.js only supports the V8 engine, which is
                exclusive to Google Chrome. However, written JavaScript code can
                run in any environment, regardless of whether it supports the V8
                engine.
              </li>
            </ol>
          </p>
        </div>
      </div>

      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            How does NodeJS handle multiple requests at the same time?
          </h1>
        </div>
        <div className="mx-11 mb-4 text-lg text-gray-500">
          <p>
            NodeJS Web Server maintains a limited Thread Pool to provide
            services to client requests. Multiple clients make multiple requests
            to the NodeJS server. NodeJS receives these requests and places them
            into the EventQueue . 
            <br />
            NodeJS server has an internal component
            referred to as the EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded. In
            other words, EventLoop is the listener for the EventQueue.

            <br />

            If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. 
            
            <br /> That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
