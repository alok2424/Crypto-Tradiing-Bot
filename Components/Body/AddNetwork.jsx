import { headers } from "next/headers";
import React, { useState, useCallback, useEffect } from "react";
import { useDropZone } from "react-dropzone";
import toast from "react-hot-toast";

const AddNetwork = ({ axios }) => {
  //NOTIFICATION
  const notify = (msg) => toast.error(msg, { duration: 2000 });
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  const [displayImg, setDisplayImg] = useState("");
  const [network, setNetwork] = useState({
    networkName: "",
    rpcUrl: "",
    apiKey: "",
    walletAddress: "",
    privateKey: "",
    image: displayImg,
  });

  const handleFormFieldChange = (fieldName, e) => {
    setNetwork({ ...network, [fieldName]: e.target.value });
  };

  const saveNetworks = () => {
    const { networkName, rpcUrl, apiKey, walletAddress, privateKey, image } =
      network;

    if (
      !networkName ||
      !rpcUrl ||
      !apiKey ||
      !walletAddress ||
      !privateKey ||
      !image
    )
      return notifyError("Provide all data");

    let networkArray = [];

    const networksLists = localStorage.getItem("setNetworks");
    if (networksLists) {
      networkArray = JSON.parse(localStorage.getItem("setNetworks"));
      networkArray.push(token);
      localStorage.setItem("setNetworks", JSON.stringify(networkArray));
      notifySuccess("Networks add Successfully");
      window.location.reload();
    } else {
      networkArray.push(token);
      localStorage.setItem("setNetworks", JSON.stringify(networkArray));
      notifySuccess("Networks add Successfully");
    }
  };

  const uploadToInfura = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: "6eb6db48369dda137418",
            pinata_secret_api_key: "",
          },
        });

        const ImgHash = `https://getway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        setNetwork({ ...network, images: ImgHash });
        setDisplayImg(ImgHash);
      } catch (error) {
        notifyError("Unable to upload image to pinata");
        console.log(error);
      }
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToInfura(acceptedFile[0]);
  });

  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropZone({ onDrop, maxSize: 500000000000 });

  return (
    <div className="techwave_fn_content">
      <div className="techwave_fn_page">
        <div className="techwave_fn_user_settings_page">
          <div className="techwave_fn_pagetitle">
            <h2 className="title">Add Trading Tokens</h2>
          </div>

          <div className="container small">
            <div className="techwave_fn_user_settings">
              <form>
                <div className="user__settings">
                  <div className="settings_left">
                    <label htmlFor="input" className="fn__upload">
                      {displayImg == "" ? (
                        <span className="upload_content" {...getRootProps()}>
                          <span className="title">Drag & Drop a Image</span>
                          <span className="fn__lined_text">
                            <span className="line"></span>
                            <span className="text">0k</span>
                            <span className="line"></span>
                          </span>

                          <span className="title">Browse</span>
                          <span className="desc">Support JPG,JPEG,and PNG</span>
                          <input
                            type="file"
                            accept="image/*"
                            {...getInputProps()}
                          />
                        </span>
                      ) : (
                        <img
                          src={displayImg}
                          className="preview_img"
                          alt=""
                        ></img>
                      )}
                    </label>
                  </div>

                  <div className="settings_right">
                    <div className="item">
                      <label htmlFor="name" className="input_label">
                        Network Name
                      </label>

                      <div className="input_item">
                        <input
                          type="text"
                          className="input"
                          placeholder="network"
                          onChange={(e) =>
                            handleFormFieldChange("networkName", e)
                          }
                        ></input>
                      </div>
                    </div>

                    <div className="item">
                      <label htmlFor="name" className="input_label">
                        Alchemy Provider
                      </label>

                      <div className="input_item">
                        <input
                          type="text"
                          className="input"
                          placeholder="RPC URL"
                          onChange={(e) => handleFormFieldChange("rpcUrl", e)}
                        ></input>
                      </div>
                    </div>

                    <div className="item">
                      <label htmlFor="name" className="input_label">
                        Alchemy API Key
                      </label>

                      <div className="input_item">
                        <input
                          type="text"
                          className="input"
                          placeholder="APi Key"
                          onChange={(e) => handleFormFieldChange("apiKey", e)}
                        ></input>
                      </div>
                    </div>

                    <div className="item">
                      <label htmlFor="name" className="input_label">
                        Wallet Address
                      </label>

                      <div className="input_item">
                        <input
                          type="text"
                          className="input"
                          placeholder="wallet address"
                          onChange={(e) =>
                            handleFormFieldChange("walletAddress", e)
                          }
                        ></input>
                      </div>
                    </div>

                    <div className="item">
                      <label htmlFor="name" className="input_label">
                        Private Key
                      </label>

                      <div className="input_item">
                        <input
                          type="text"
                          className="input"
                          placeholder="Private Key"
                          onChange={(e) =>
                            handleFormFieldChange("privateKey", e)
                          }
                        ></input>
                      </div>
                    </div>

                    <div className="item">
                      <div>
                        <a
                          onClick={() => saveNetworks()}
                          className="techwave_fn_button"
                        >
                          Save Networks
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNetwork;
