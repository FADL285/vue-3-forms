let UUID = 0;

export default function UniqueID() {
  const getID = () => {
    UUID++;
    return `fadl-id-${UUID}`;
  };

  return {
    getID
  };
}
