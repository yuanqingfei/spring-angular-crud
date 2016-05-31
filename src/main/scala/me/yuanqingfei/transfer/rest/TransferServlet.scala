package me.yuanqingfei.transfer.rest

import me.yuanqingfei.transfer.pojo.{Transfer, TransferList}
import me.yuanqingfei.transfer.service.TransferService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation._

/**
  * Created by aaron on 16-5-28.
  */
@RestController
@RequestMapping(value=Array("/api"))
class TransferServlet @Autowired()(transferService: TransferService) {

  @RequestMapping(value=Array("/transfers"), method=Array(RequestMethod.GET))
  def getAll: TransferList = {
    val transferList = new TransferList()
    val orginalList = transferService.getAll()
    transferList.setTotal(orginalList.size())
    transferList.setResults(orginalList)
    transferList
  }

  @RequestMapping(value=Array("/transfers/{id}"), method=Array(RequestMethod.GET))
  def get(@PathVariable("id") id: String): Transfer = {
    transferService.getTransfer(id)
  }

  @RequestMapping(value=Array("/transfers"), method=Array(RequestMethod.POST))
  def insert(@RequestBody transfer: Transfer): Transfer = {
    transferService.insertTransfer(transfer)
  }

  @RequestMapping(value=Array("/transfers/{id}"), method=Array(RequestMethod.POST))
  def insert2(@PathVariable("id") id: String, @RequestBody transfer: Transfer): Transfer = {
    transferService.insertTransfer(transfer)
  }

  @RequestMapping(value=Array("/transfers/{id}"), method=Array(RequestMethod.PUT))
  def update(@PathVariable("id") id: String, @RequestBody transfer: Transfer): Transfer = {
    transferService.updateTransfer(id, transfer)
  }

  @RequestMapping(value=Array("/transfers/{id}"), method=Array(RequestMethod.DELETE))
  def delete(@PathVariable("id") id: String): String = {
    transferService.deleteTransfer(id)
    "{\"message\": \"delete successfully!\"}"
  }

}
