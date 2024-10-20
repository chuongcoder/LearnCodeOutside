<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
            <%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
                <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="theme-color" content="#06aa5e">
                    <meta name="msapplication-navbutton-color" content="#06aa5e">
                    <meta name="apple-mobile-web-app-capable" content="yes">
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
                    <title>Sign up | Basket ™</title>
                    <link rel="shortcut icon" href="/signup/images/favicon.png" type="image/x-icon">
                    <link rel="stylesheet" href="/signup/css/styles.css">
                    <script src="/signup/js/script.js" defer></script>
                </head>

                <body>
                    <main class="card-container slideUp-animation">
                        <div class="image-container">
                            <h1 class="company">KAISHOP <sup>&trade;</sup></h1>
                            <img src="/signup/images/signUp.svg" class="illustration" alt="">
                            <p class="quote">Sign up today to get exciting offers..!</p>
                            <a href="#btm" class="mobile-btm-nav">
                                <img src="/signup/images/dbl-arrow.png" alt="">
                            </a>
                        </div>
                        <form:form method="post" enctype="multipart/form-data" action="/register"
                            modelAttribute="registerUser" class="row">
                            <div class="form-container slideRight-animation">

                                <h1 class="form-header">
                                    Get started
                                </h1>
                                <c:set var="errorconfirmPassword">
                                    <form:errors path="confirmPassword" cssClass="invalid-feedback" />
                                </c:set>
                                <c:set var="errorPassword">
                                    <form:errors path="password" cssClass="invalid-feedback" />
                                </c:set>
                                <div class="input-container">
                                    <c:set var="errorFirstName">
                                        <form:errors path="firstName" cssClass="invalid-feedback" />
                                    </c:set>
                                    <label class="form-label">FirstName:</label>
                                    <form:input type="text"
                                        class="form-control ${not empty errorFirstName   ?'is-invalid':''}  "
                                        path="firstName" />
                                    ${errorFirstName}
                                </div>

                                <div class="input-container">
                                    <c:set var="errorLastName">
                                        <form:errors path="lastName" cssClass="invalid-feedback" />
                                    </c:set>
                                    <label class="form-label">LastName:</label>
                                    <form:input type="text"
                                        class="form-control ${not empty errorLastName   ?'is-invalid':''}  "
                                        path="lastName" />
                                    ${errorLastName}
                                </div>
                                <div class="input-container">
                                    <c:set var="errorEmail">
                                        <form:errors path="email" cssClass="invalid-feedback" />
                                    </c:set>
                                    <label class="form-label">Email:</label>
                                    <form:input type="email"
                                        class="form-control ${not empty errorEmail   ?'is-invalid':''}  "
                                        path="email" />
                                    ${errorEmail}
                                </div>
                                <div class="input-container">
                                    <label class="form-label">Password:</label>
                                    <div class="hidepassword">
                                        <form:input type="password"
                                            class="form-control ${not empty errorPassWord   ?'is-invalid':''} "
                                            path="password" id="inputpassword" />
                                        <img src="/signup/images/eye-close.png" style="height: 15px; width: 15px;">
                                    </div>
                                </div>
                                <div class="input-container">
                                    <label class="form-label">ConfirmPassword:</label>
                                    <form:input type="password"
                                        class="form-control  ${not empty errorconfirmPassword   ?'is-invalid':''}"
                                        path="confirmPassword" />
                                    ${errorconfirmPassword}
                                </div>
                                <div class="col-12 mb-5">
                                    <button type="submit" class="btn btn-success">Create</button>
                                </div>
                            </div>
                        </form:form>
                    </main>
                </body>

                </html>