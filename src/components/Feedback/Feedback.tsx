const Feedback = ({
  satisfied,
  handleFeedback,
}: {
  satisfied: boolean | null;
  handleFeedback: (value: boolean) => void;
}) => {
  return (
    <div>
      {satisfied != null && (
        <div className="flex items-center justify-center gap-2">
          {satisfied ? (
            <>
              <span className="text-xs text-gray-400">
                Thank you for your feedback!
              </span>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">
                Have the answers been satisfactory so far?
              </span>
              <div
                className="flex  gap-2 cursor-pointer"
                onClick={() => handleFeedback(true)}
              >
                <img src="/like.png" alt="like" width={12} />
                <img
                  src="/like.png"
                  alt="like"
                  width={12}
                  className="rotate-180"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Feedback;
