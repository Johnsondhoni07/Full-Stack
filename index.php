<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" >
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <title>weather</title>
    <style>
        #grid{
            display: none;
        }
    </style>
</head>
<body style="background-color:azure;">
    <header style="box-shadow: 0px 0px 5px #000;">
        <div class="container-fluid bg-info ">
            <div class="row">
                <div class="col-1 m-3">
                    <img class="img-fluid" src="images/weather.png" >
                </div>  
                <div class="m-auto">
                    <p class="h1"> WEATHER APPLICATION</p>
                </div>
            </div>
        </div>
    </header>
    <main> 
        <div>
            <?php
                include_once("config.php");
                $sql_query="SELECT  * FROM weather_table";
                $weatherdata=array();
                $conn_query=mysqli_query($conn,$sql_query);
                while($row=mysqli_fetch_assoc($conn_query)){
                    $country=$row["Country"];
                    $city=$row["City"];
                    $decode=apireq($city);
                    $temp=((float)$decode['main']['temp'])-273.15;
                    $weather=$decode['weather']['0']['main'];
                    array_push($weatherdata,array($city,$country,$temp,$weather));
                }
                // print_r($weatherdata);
            ?>

            <div class="container " >
                <!-- Buttons -->
                <div class="row ">
                    <div class="col-2 ">
                        <input class="btn btn-outline-info active mt-3 " type="button" id="list_btn" value="List" style="box-shadow: 0px 0px 5px #000;">
                        <input class="btn btn-outline-info mt-3 ml-1" type="button" id="grid_btn" value="Grid" style="box-shadow: 0px 0px 5px #000;">
                    </div>    
                    <div class="col text-right  mt-3">
                        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#modal_add" style="box-shadow: 0px 0px 5px #000;">
                        Add New City
                        </button>
                    </div>
                </div>
                <div class="container p-0">
                <!-- list view --> 
                    <div class="table-responsive table-striped" id="list">
                        <table class="table table-bordered mt-4 ">
                            <thead class="bg-info">
                                <tr>
                                    <td>CITY</td>
                                    <td>COUNTRY</td>
                                    <td>TEMPERATURE</td>
                                    <td>WEATHER</td>
                                </tr>
                            </thead>
                            <tbody>
                            <?php 

                                foreach($weatherdata as $weather)
                                {
                                    ?>
                                    <tr>
                                        <td><?php echo $weather[0]; ?></td>
                                        <td><?php echo $weather[1]; ?></td>
                                        <td><?php echo $weather[3]; ?></td>
                                        <td><?php echo $weather[2]; ?></td>
                                    </tr>

                                    <?php
                                }

                                ?>                                   
                            </tbody> 
                        </table>
                    </div>
                    <style>
                        #grid img{
                            height:50px;
                            width: 50px;
                        }
                    </style>
                    <!-- grid view -->
                    <div class="mt-3" id="grid">
                        <div class="row">
                                <?php 
                                foreach($weatherdata as $weather)
                                {
                                    ?>
                                        <div class="card bg-info ml-3 mt-3" style="width: 10rem;">
                                            <div class="card-body">
                                                <h5 class="card-title"><?php echo $weather[3]; ?>
                                                    <?php
                                                    $weather_name=strtolower($weather[3]);
                                                    echo '<img class="img-thumbnail" src="images/'.$weather_name.'.png">';
                                                    ?>
                                            </h5>
                                                <p class="card-text"><?php echo "Temp:".$weather[2] ."<sup>*</sup>"."C"?></p>
                                                <p class="card-text"><?php echo $weather[0]; ?></p>
                                                <p class="card-text"><?php echo $weather[1]; ?></p>
                                            </div>
                                        </div>  
                                    <?php                                  
                                }                            
                                ?>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="modal_add" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h5 class="modal-title w-100 ">ADD CITY</h5>
                        <button type="button" class="close btn btn-outline-info" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="form" method="post">
                        <div class="modal-body">
                                <input class="input-group" type="text" id="city" name="city" placeholder="Enter The City Name">
                                <p id="add_btnmsg"></p>
                        </div>
                        <div class="mb-3 p-1">
                            <center>
                                <input value="submit" onclick="validation()" type="button" id="submit" name="submit" class="btn btn-outline-info"></input>
                            </center>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <script src="validation.js" type="text/javascript"></script>
    <footer class="footer-copyright text-center py-3 bg-info" style="margin-top: 20%;">
        <div class="footer-copyright text-center p-3">
            © 2021 Copyright
        </div>
    </footer>  
</body>
</html>