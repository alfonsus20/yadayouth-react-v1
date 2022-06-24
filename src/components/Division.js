import OprecCard from "./OprecCard";

const Division = ({ idx, color, image, title, description }) => {
  return (
    <div className="w-full">
      <div>
        <div className="flex flex-wrap flex-row justify-around">
          <OprecCard
            key={idx}
            image={image}
            title={title}
            description={description}
            color={color}
          />
        </div>
      </div>
    </div>
  );
};

export default Division;
