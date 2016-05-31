package me.yuanqingfei.transfer.service

import me.yuanqingfei.transfer.mapper.TransferMapper
import me.yuanqingfei.transfer.pojo.Transfer
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

import scala.beans.BeanProperty

/**
  * Created by aaron on 16-5-21.
  */
@Component
class TransferService @Autowired()(transferMapper: TransferMapper) {

  def getAll(): java.util.List[Transfer] ={
    transferMapper.getAll()
  }

  def getTransfer(id: String): Transfer ={
    transferMapper.getTransfer(id.toInt)
  }

  def updateTransfer(id: String, transfer: Transfer): Transfer = {
    transferMapper.updateTransfer(id.toInt, transfer)
    transfer
  }

  def deleteTransfer(id: String) = {
    transferMapper.deleteTransfer(id.toInt)
  }

  def insertTransfer(transfer: Transfer): Transfer = {
    transferMapper.insertTransfer(transfer)
    transfer
  }
}
