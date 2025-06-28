// Fake Blog Database
const blogs = [
    {
      id: 1,
      title: "5 Tips for Successful Organic Farming",
      imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      content: "Learn the best techniques to increase your organic farm's productivity and sustainability."
    },
    {
      id: 2,
      title: "How to Choose the Right Seeds for Your Farm",
      imageUrl: "https://images.nationalgeographic.org/image/upload/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg",
      content: "Choosing the right seeds can make a huge difference in your harvest! Here's how to pick wisely."
    },
    {
      id: 3,
      title: "The Importance of Farm Machinery Maintenance",
      imageUrl: "https://assets.khetigaadi.com/tr:h-200,w-330/new-tractor/Mahindra-475-DI1735707554_XJhSr05EQ.png",
      content: "Maintain your farm machinery properly to reduce costs and increase productivity."
    }
  ];
  
  // Load blogs
  const blogContainer = document.getElementById('blog-container');
  
  blogs.forEach(blog => {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    blogPost.innerHTML = `
      <img src="${blog.imageUrl}" alt="${blog.title}">
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
    `;
    blogContainer.appendChild(blogPost);
  });
  