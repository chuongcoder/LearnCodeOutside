<!DOCTYPE html>
<html lang="en">
<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>'
        <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Product View</title>
                <link href="/css/styles.css" rel="stylesheet" />
                <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
            </head>

            <body class="sb-nav-fixed">
                <jsp:include page="../layout/header.jsp" />
                <div id="layoutSidenav">
                    <jsp:include page="../layout/sidebar.jsp" />
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid px-4">
                                <h1 class="mt-4">Dashboard</h1>
                                <ol class="breadcrumb mb-4">
                                    <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                                    <li class="breadcrumb-item"><a href="/product">Product</a></li>
                                    <li class="breadcrumb-item">View</li>
                                </ol>
                                <div class="container mt-5">
                                    <div class="row">
                                        <div class="col-12 mx-auto">
                                            <h2 class="mb-5">View Product Infomation</h2>
                                            <div class="card" style="width: 60%;">
                                                <div class="card-header">
                                                    Product Infomation
                                                </div>
                                                <div>
                                                    <img class="card-img-top" src="/images/product/${Product.image}"
                                                        alt="">
                                                </div>

                                                <ul class="list-group list-group-flush">

                                                    <li class="list-group-item">ID: ${Product.id}</li>
                                                    <li class="list-group-item">Name: ${Product.name}</li>
                                                    <li class="list-group-item">Short Description:
                                                        ${Product.short_description}
                                                    </li>
                                                    <li class="list-group-item">Detail Description:
                                                        ${Product.detail_description}
                                                    </li>
                                                    <li class="list-group-item">Factory: ${Product.brand}</li>
                                                    <li class="list-group-item">Material: ${Product.material}</li>
                                                    <li class="list-group-item">Target: ${Product.price}</li>
                                                    <li class="list-group-item">Sold: ${Product.sold}</li>
                                                </ul>
                                            </div>
                                            <a href="/product" class="btn btn-primary mt-3">Back</a>
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
                <script src="js/scripts.js"></script>
            </body>

</html>