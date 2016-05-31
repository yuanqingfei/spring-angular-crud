package me.yuanqingfei.transfer

import com.alibaba.druid.pool.DruidDataSource
import me.yuanqingfei.transfer.rest.TransferServlet
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.embedded.ServletRegistrationBean
import org.springframework.context.annotation.{Bean, PropertySource}

/**
  * Created by aaron on 16-5-3.
  */

@SpringBootApplication
@PropertySource(Array("classpath:jdbc.properties"))
class MyRestApplication{

  @Value("${jdbc.url}")
  var jdbcUrl: String = _

  @Value("${jdbc.username}")
  var jdbcUserName: String = _

  @Value("${jdbc.password}")
  var jdbcPassword: String = _

  @Bean
  def druidDataSource: DruidDataSource = {
    val ds: DruidDataSource = new DruidDataSource
    ds.setUrl(jdbcUrl)
    ds.setPassword(jdbcPassword)
    ds.setUsername(jdbcUserName)
    ds
  }

}

object MyRestApplication extends App{
  SpringApplication.run(classOf[MyRestApplication], args: _*) // bootstrap the application
}
