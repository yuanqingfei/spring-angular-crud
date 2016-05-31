name := "spring-angular-crud"
version := "1.0.0"
scalaVersion := "2.11.8"
scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8")


val springBootVersion = "1.3.5.RELEASE"
val ScalatraVersion = "2.4.0"

val springStack = Seq(
  "org.springframework.boot" % "spring-boot-starter-web" % springBootVersion
)
val dbStack = Seq(
  "org.mybatis.spring.boot" % "mybatis-spring-boot-starter" % "1.1.1",
  "com.alibaba" % "druid" % "1.0.15",
  "postgresql" % "postgresql" % "9.1-901.jdbc4"
)

libraryDependencies ++= springStack ++ dbStack

mainClass in Compile := Some("me.yuanqingfei.transfer.MyRestApplication")

enablePlugins(JavaAppPackaging)
enablePlugins(sbtdocker.DockerPlugin)

dockerfile in docker := {
  val appDir: File = stage.value
  val targetDir = "/app"

  new Dockerfile {
    from("192.168.0.117:5000/java")
    entryPoint(s"$targetDir/bin/${executableScriptName.value}")
    copy(appDir, targetDir)
    expose(8080)
  }
}

