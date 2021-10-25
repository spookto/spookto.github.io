function loadGallery(imgCount)
{
    var gallery = document.getElementById("gallery");

    if (gallery == null)
    {
        return;
    }

    gallery.innerHTML = "";
    var i = 0;
    for (i = 0; i < imgCount; i++)
    {
        var img = document.createElement("img");

        img.className = "image";

        gallery.appendChild(img);

        var source = "https://spookto.github.io/gallery/";

        var altS = source+i;
        img.alt = altS;

        img.src = altS+".png";

        img.onerror = function()
        {
            var s = this.alt;

            if (this.src.indexOf("png") != -1)
            {
                this.src = s+".jpg";
                
                this.onerror = function()
                {
                    if (this.src.indexOf("jpg") != -1)
                    {
                        this.src = s+".gif";
                        
                        this.onerror = function()
                        {
                            this.remove();
                            i = imgCount;
                        }
                    }
                }
            }
        }

        img.onclick= function() {showView(this.src);}
        gallery.appendChild(img);
    }
}

function showView(source)
{
    var view = document.getElementById("view");
    var viewImage = document.getElementById("view-image");

    if (source == null)
    {
        view.style.display = "none";
        return;
    }
    view.style.display = "block";
    viewImage.src = source;
}