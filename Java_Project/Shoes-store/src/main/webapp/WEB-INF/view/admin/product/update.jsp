<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Update Prod</title>
                <link href="/css/styles.css" rel="stylesheet" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
                <script>
                    $(document).ready(() => {
                        const avatarFile = $("#avatarFile");
                        const originImage = "${updatedProduct.image}";
                        if (originImage) {
                            const urllink = "/images/product/" + originImage;
                            $("#avatarPreview").attr("src", urllink).css({ "display": "block" });
                        }
                        avatarFile.change(function (e) {
                            if (e.target.files.length > 0) {
                                const imgURL = URL.createObjectURL(e.target.files[0]);
                                $("#avatarPreview").attr("src", imgURL).css({ "display": "block" });
                            } else {
                                $("#avatarPreview").css({ "display": "none" });
                            }
                        });
                    });


                </script>
            </head>

            <body class="sb-nav-fixed">
                <jsp:include page="../layout/header.jsp" />
                <div id="layoutSidenav">
                    <jsp:include page="../layout/sidebar.jsp" />
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid px-4">
                                <h1 class="mt-4">Manage Products</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Products</li>
                                </ol>
                                <div class=" mt-5">
                                    <div class="row">
                                        <div class="col-md-6 col-12 mx-auto">
                                            <h3>Update a Product</h3>
                                            <hr />
                                            <form:form method="post" action="/admin/product/update"
                                                modelAttribute="updatedProduct">
                                                <div class="mb-3" style="display: none;">
                                                    <form:input type="text" class="form-control" path="id" />
                                                </div>
                                                <div class="mb-3" style="display: none;">
                                                    <form:input type="text" class="form-control" path="sold" />
                                                </div>
                                                <div class="mb-3" style="display: none;">
                                                    <form:input type="text" class="form-control" path="material" />
                                                </div>
                                                <div class="mb-3" style="display: none;">
                                                    <form:input type="text" class="form-control" path="brand" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Name:</label>
                                                    <form:input type="email" class="form-control" path="name"
                                                        disabled="true" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Price:</label>
                                                    <form:input type="text" class="form-control" path="price" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Detail Descripton:</label>
                                                    <form:input type="text" class="form-control"
                                                        path="detail_description" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Short Description:</label>
                                                    <form:input type="text" class="form-control"
                                                        path="short_description" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="avatarFile" class="form-label">Image:</label>
                                                    <input class="form-control" type="file" id="avatarFile"
                                                        name="anhkietfile" accept=".png, .jpg, .jpeg" />
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <img style="max-height: 250px; display: none;" alt="avatar preview"
                                                        id="avatarPreview" />
                                                </div>
                                                <button type="submit" class="btn btn-warning">Update</button>
                                            </form:form>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </main>
                        <jsp:include page="../layout/footer.jsp" />
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                    crossorigin="anonymous"></script>
                <script src="/js/scripts.js"></script>

            </body>

            </html>