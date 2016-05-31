package me.yuanqingfei.transfer.pojo

import scala.beans.BeanProperty


/**
  * Created by aaron on 16-5-22.
  */
class TransferList{

  @BeanProperty
  var total: Int = _

  @BeanProperty
  var results: java.util.List[Transfer] = _

  override def toString = s"TransferList($total, $results)"
}
