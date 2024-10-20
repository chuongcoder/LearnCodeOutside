<!DOCTYPE html>
<html lang="en">
<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>'

        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Dashboard</title>
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
                                <li class="breadcrumb-item active"><a href="/admin">Dashboard</a></li>
                                <li class="breadcrumb-item active">User</li>
                            </ol>
                            <div class="container mt-5">
                                <div class="row">
                                    <div class="col-12 mx-auto">
                                        <div class="d-flex justify-content-between mb-3">
                                            <h2>Table Users</h2>
                                            <a href="/user/create"><button type="button" class="btn btn-primary">Create
                                                    a
                                                    User</button></a>
                                        </div>
                                        <hr>
                                        <table class="table table-bordered  table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style="width: 10%;">ID</th>
                                                    <th scope="col" style="width: 10%;">Email</th>
                                                    <th scope="col" style="width: 20%;">Full Name</th>
                                                    <th scope="col" style="width: 60%;">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <c:forEach items="${users}" var="user">
                                                    ${item}<br>
                                                    <tr>
                                                        <td>${user.id}</td>
                                                        <td>${user.email}</td>
                                                        <td>${user.fullName}</td>
                                                        <!---->
                                                        <td>
                                                            <div class="d-flex justify-content-start">
                                                                <a href="/user/${user.id}"
                                                                    class="btn btn-success">View</a>
                                                                <a href="/user/update/${user.id}"
                                                                    class="btn btn-warning mx-3">Update</a>
                                                                <a href="/user/delete/${user.id}"
                                                                    class="btn btn-danger">Delete</a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </c:forEach>
                                            </tbody>
                                        </table>
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