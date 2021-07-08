import React, { useState } from 'react'
import './post-new-auction.scss';

function PostNewAuction() {
    const [newAuction,setNewAuction]=useState({
        Title:"",
        Category:"",
        New:false,
        Governorate:"",
        Area:"",
        Startingbid:"",
        BuyNowPrice:"",
        Brand:"",
        Year:"",
        Model:"",
        BodyStyle:"",
        kilometers:"",
        DrivetrainType:"",
        Color:"",
        FactoryPaint:"",
        InWarranty:"",
        EngineCapacity:"",
        Trim:"",
        Transmission:"",
        Description:"",
        FeatureImg:"/photo.png",
        ProductImg:"/photo.png",
        PDFFile:"",
        Video:"",
    })
    const handelChange=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        const nValue=newAuction.New;
        if(name === "New"){
            setNewAuction ({...newAuction,New: !nValue})
        }
        else{
            setNewAuction({...newAuction,[name]:value});
        }
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        alert("saved :) ")
    }
    const imageHandler=(e)=>{
        e.preventDefault();
        const reader= new FileReader();
        const name=e.target.name;
        reader.onload=() =>{
            if (reader.readyState === 2){
                setNewAuction({...newAuction,[name] : reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const fileHandler=(e)=>{
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.files[0].name;
        setNewAuction({...newAuction,[name]:value});
    }
    console.log(newAuction)
    return (
        <div className="postAuction-page">
            <h1 className="title">Post New Auction</h1>
            <div className="postAuction-page_columns">
                <form className="form" onSubmit={handelSubmit} >
                    <div className="postAuction-page_columns-left">
                        <h2>General</h2>
                        <input
                            type="text" 
                            name="Title" 
                            placeholder="Title"
                            id="title"
                            onChange={handelChange}
                        />
                        <select 
                            className="half selectdiv"
                            id="category"
                            name="Category"
                            placeholder="Category"
                            onChange={handelChange}
                        >
                            <option value="category">Category</option>
                            <option value="category1">Category1</option>
                            <option value="category2">Category2</option>
                        </select>
                        <div className="half field" >
                            <label for="new"> New</label>
                            <input 
                                type="checkbox"
                                id="new" 
                                name="New" 
                                onChange={handelChange}
                            />
                             <span class="checkmark"></span>
                        </div>
                        <select 
                            className="half selectdiv"
                            id="governorate"
                            name="Governorate"
                            placeholder="Governorate"
                            onChange={handelChange}
                        >
                            <option value="governorate">Governorate</option>
                            <option value="governorate1">Governorate1</option>
                            <option value="governorate2">Governorate2</option>
                        </select>
                        <select 
                            className="half"
                            id="area"
                            name="Area"
                            placeholder="Area"
                            onChange={handelChange}
                        >
                            <option value="area">Area</option>
                            <option value="area1">Area1</option>
                            <option value="area2">Area2</option>
                        </select>
                        <h2>Auction Settings</h2> 
                        <input
                            type="text"
                            className="half-2" 
                            name="Standingbid" 
                            placeholder="Standing bid   (EGP)"
                            id="Standingbid"
                            onChange={handelChange}
                        />
                        <input
                            type="text"
                            className="half-2" 
                            name="Standingbid" 
                            placeholder="Buy it now price   (EGP)"
                            id="Standingbid"
                            onChange={handelChange}
                        />
                        <h2>Additional information</h2>
                        <select 
                            className="half"
                            id="brand"
                            name="Brand"
                            placeholder="Brand"
                            onChange={handelChange}
                        >
                            <option value="brand">Brand</option>
                            <option value="brand1">Brand1</option>
                            <option value="brand2">Brand2</option>
                        </select>
                        <select 
                            className="half"
                            id="model"
                            name="Model"
                            placeholder="Model"
                            onChange={handelChange}
                        >
                            <option value="model">Model</option>
                            <option value="model1">Model1</option>
                            <option value="model2">Model2</option>
                        </select>
                        <select 
                            className="half"
                            id="year"
                            name="Year"
                            placeholder="Year"
                            onChange={handelChange}
                        >
                            <option value="year">Year</option>
                            <option value="year1">Year1</option>
                            <option value="year2">Year2</option>
                        </select>
                        <select 
                            className="half"
                            id="body"
                            name="BodyStyle"
                            placeholder="BodyStyle"
                            onChange={handelChange}
                        >
                            <option value="bodyStyle">BodyStyle</option>
                            <option value="bodyStyle1">BodyStyle1</option>
                            <option value="bodyStyle2">BodyStyle2</option>
                        </select>
                        <select 
                            className="half"
                            id="kilometers"
                            name="Kilometers"
                            placeholder="Kilometers"
                            onChange={handelChange}
                        >
                            <option value="kilometers">Kilometers</option>
                            <option value="kilometers1">Kilometers1</option>
                            <option value="kilometers2">Kilometers2</option>
                        </select>
                        <select 
                            className="half"
                            id="drivenTrainType"
                            name="DrivenTrainType"
                            placeholder="DrivenTrainType"
                            onChange={handelChange}
                        >
                            <option value="drivenTrainType">DrivenTrain Type</option>
                            <option value="drivenTrainType1">DrivenTrain Type1</option>
                            <option value="drivenTrainType2">DrivenTrain Type2</option>
                        </select>
                        <select 
                            className="half"
                            id="color"
                            name="Color"
                            placeholder="Color"
                            onChange={handelChange}
                        >
                            <option value="color">Color</option>
                            <option value="color1">Color1</option>
                            <option value="color2">Color2</option>
                        </select>
                        <select 
                            className="half"
                            id="factorypaint"
                            name="Factorypaint"
                            placeholder="Factorypaint"
                            onChange={handelChange}
                        >
                            <option value="factorypaint">Factory paint</option>
                            <option value="factorypaint1">Factory paint1</option>
                            <option value="factorypaint2">Factory paint2</option>InWarranty
                        </select>
                        <select 
                            className="half"
                            id="inWarranty"
                            name="InWarranty"
                            placeholder="InWarranty"
                            onChange={handelChange}
                        >
                            <option value="inWarranty">InWarranty</option>
                            <option value="inWarranty1">InWarranty1</option>
                            <option value="inWarranty2">InWarranty2</option>
                        </select>
                        <select 
                            className="half"
                            id="engineCapacity"
                            name="EngineCapacity"
                            placeholder="EngineCapacity"
                            onChange={handelChange}
                        >
                            <option value="engineCapacity">Engine Capacity</option>
                            <option value="engineCapacity1">Engine Capacity1</option>
                            <option value="engineCapacity2">Engine Capacity2</option>
                        </select>
                        <select 
                            className="half"
                            id="trim"
                            name="Trim"
                            placeholder="Trim"
                            onChange={handelChange}
                        >
                            <option value="trim">Trim</option>
                            <option value="trim1">Trim1</option>
                            <option value="trim2">Trim2</option>
                        </select>
                        <select 
                            className="half"
                            id="transmission"
                            name="Transmission"
                            placeholder="Transmission"
                            onChange={handelChange}
                        >
                            <option value="transmission">Transmission</option>
                            <option value="transmission1">Transmission1</option>
                            <option value="transmission2">Transmission2</option>
                        </select>
                    </div>
                    <div className="postAuction-page_columns-right">
                        <div className="upload-file">
                            <label for="featureimg"><img className="upload-img" src={newAuction.FeatureImg} /></label>
                            <input
                                type="file"
                                name="FeatureImg"
                                id="featureimg"
                                onChange={imageHandler}
                            />
                            <p className="upload-txt">Feature Image</p>
                        </div>
                        <div className="upload-file">
                            <label for="productimg"><img className="upload-img" src={newAuction.ProductImg} /></label>
                            <input
                                type="file"
                                name="ProductImg"
                                id="productimg"
                                onChange={imageHandler}
                            />
                            <p className="upload-txt">Product Image</p>
                            <p> drag and drop or browse to choose a file<br/>Max upload:10 Image(png,Jpg)</p>
                        </div>
                        <div className="upload-file">
                            <label for="pdfFIle"><img className="upload-img" src="/pdf.png"/></label>
                            <input
                                type="file"
                                name="PDFFile"
                                id="pdfFIle"
                                onChange={fileHandler}
                            />
                            <p className="upload-txt">Monitorization Report </p>
                            <p>{newAuction.PDFFile} </p>
                        </div>
                        <div className="upload-file">
                            <label for="video"><img className="upload-img" src="/youtube-up.png"/></label>
                            <input
                                type="file"
                                name="Video"
                                id="video"
                                onChange={fileHandler}
                            />
                            <p className="upload-txt">Select Video to upload</p>
                            <p>{newAuction.Video} </p>
                        </div>
                    </div>
                    <div className="postAuction-page_columns-full">
                        <h2>Description</h2>
                        <textarea 
                            rows="5"
                            name="Description"
                            id="description"
                            placeholder="Enter Description"
                            onChange={handelChange}
                        />
                    </div>
                    <input className="button solid" type="submit" name="submit" value="Save Changes"/>
                </form>
            </div>
        </div>
    )
}

export default PostNewAuction