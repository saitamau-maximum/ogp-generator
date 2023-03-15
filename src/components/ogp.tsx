interface Props {
  msg?: string;
}

const baseUnit = 16;

export const OGP = ({ msg }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: baseUnit,
        display: "flex",
        background: "#9AC78A",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: `solid ${baseUnit / 4}px #fff`,
          position: "relative",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: baseUnit * 5,
              color: "#fff",
              textShadow: `0 ${baseUnit / 4}px ${baseUnit / 4}px #838383`,
              padding: baseUnit * 2,
            }}
          >
            {msg}
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: baseUnit,
            left: baseUnit,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: baseUnit * 4,
              color: "#525252",
            }}
          >
            Maximum
          </span>
          <span
            style={{
              fontSize: baseUnit * 1.5,
              color: "#525252",
            }}
          >
            埼玉大学プログラミングサークル
          </span>
        </div>
        <span
          style={{
            position: "absolute",
            bottom: baseUnit,
            right: baseUnit,
            fontSize: baseUnit * 1.5,
            color: "#525252",
          }}
        >
          maximum.vc
        </span>
      </div>
    </div>
  );
};
