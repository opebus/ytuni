const CategoryView = ({ params }: any) => {
  const { category } = params;

  return <div>Showing videos for: {category}</div>;
};

export default CategoryView;
