'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/Projects.module.css'
import RiseLoader  from "react-spinners/RiseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#D16AE6",
};

export const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "TODOS"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        setProjectData(data.projects);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };


  return (
    <div className='ml-20 mr-20' >

          <div></div>
          <div></div>
          <div>
            <div><div className={`${Styles.filterButtons} dark:text-white`}>
              <button
                className={`  ${Styles.filterButton} ${selectedCategory === "TODOS" ? Styles.activeFilter : ""
                  }`}
                onClick={() => handleCategoryChange("TODOS")}
              >
                TODOS
              </button>
              <button
                className={`${Styles.filterButton} ${selectedCategory === "FRONTEND" ? Styles.activeFilter : ""
                  }`}
                onClick={() => handleCategoryChange("FRONTEND")}
              >
                FRONTEND
              </button>
              <button
                className={`${Styles.filterButton} ${selectedCategory === "BACKEND" ? Styles.activeFilter : ""
                  }`}
                onClick={() => handleCategoryChange("BACKEND")}
              >
                BACKEND
              </button>
              <button
                className={`${Styles.filterButton} ${selectedCategory === "FULL STACK" ? Styles.activeFilter : ""
                  }`}
                onClick={() => handleCategoryChange("FULL STACK")}
              >
                FULL STACK
              </button>
            </div></div>
            <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="relative"
                  onClick={() => handleImageClick(project)}
                >
                  {project.isgif ? (
                    <img
                      src={`/images/projects/${project.id}.gif`}
                      alt={project.title}
                      className="w-full h-auto object-cover rounded-lg cursor-pointer"
                    />
                  ) : (
                    <Image
                      width={500}
                      height={500}
                      src={`/images/projects/${project.id}.png`}
                      alt={project.title}
                      className="w-full h-auto object-cover rounded-lg cursor-pointer"
                    />
                  )}
                  {/* <Image
                width={500}
                height={500}
                src={`/images/projects/${project.id}.png`}
                alt={project.title}
                className="w-full h-auto object-cover rounded-lg cursor-pointer"
              /> */}
                </div>
              ))}
              {selectedImage && (
                <div className="fixed inset-0 flex items-center   justify-center bg-black bg-opacity-50">
                  <div className="bg-white dark:bg-black p-4 md:w-1/2 sm:w-full rounded-lg">
                    <button className="text-red-500 hover:text-red-700 w-full mb-2 flex justify-end" onClick={handleClosePopup}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>

                    </button>
                    {selectedImage.isgif ? (
                      <img
                        src={`/images/projects/${selectedImage.id}.gif`}
                        alt={selectedImage.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    ) : (
                      <Image
                        width={500}
                        height={500}
                        src={`/images/projects/${selectedImage.id}.png`}
                        alt={selectedImage.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    )}

                    {/* <Image
                  width={500}
                  height={500}
                  src={`/images/projects/${selectedImage.id}.png`}
                  alt={selectedImage.title}
                  className="w-full h-auto object-cover rounded-lg"
                /> */}

                    <p className="mt-4"><span className=' font-extrabold'>Descripción: </span>{selectedImage.description}</p>
                    <p className="mt-2"><span className=' font-extrabold'>Categoría: </span>{selectedImage.category}</p>
                    <p className="mt-2"><span className=' font-extrabold'>Herramientas: </span>{selectedImage.tools}</p>
                    <a
                      href={selectedImage.demo}
                      target="_blank"
                      className="text-blue-500 hover:text-blue-700 mt-4 block text-2xl"
                    >
                      DEMO
                    </a>

                  </div>
                </div>
              )}
            </div></div>
    </div>
  );
};
