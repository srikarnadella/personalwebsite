"use client";
import React, { useState } from "react";
import Image from "next/image";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const [modalContent, setModalContent] = useState(null); // State to hold the content for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close

  const blogPosts = [
    {
      id: 1,
      title: "First Post!!!",
      summary: "New addition to website",
      content:
        "Wanted to add this component to my website so I can write about things in general. Planning on having some article reviews and general updates on what I am working on, doing, and thinking!",
      date: "2024-06-23",
    },
  ];

  const handleReadMoreClick = (post) => {
    setModalContent(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="blog" className="text-white py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div className="p-4">
                <h3 className="text-gray-700 text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.summary}</p>
                <button
                  onClick={() => handleReadMoreClick(post)}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
          onClick={closeModal} // Close modal when clicking on backdrop
        >
          <div className="bg-white p-6 rounded-lg max-w-3xl overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-gray-700 text-xl font-semibold mb-4">
              {modalContent.title}
            </h3>
            <p className="text-gray-400 text-sm">{modalContent.date}</p>
            <p className="text-gray-700">{modalContent.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
