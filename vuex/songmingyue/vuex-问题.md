##名称
vuex


##问题
1·vuex在刷新时候回回到state中定义的默认值

解决：不太好的解决方案，在localStorage中备份一份，但是这样直接从localstorage里面存取就好了，要vuex作用显然不太给力


2.在mutations就可以直接改变vuex里面的状态，却要在actions里面再走一层去修改vuex里面的状态，如果起相同的名字直接调用两个



3.getters 是对state里面的数据进行在处理，那是不是代表state的数据包含getters的数据，为啥不在mutations里面直接进行处理



4.如果没有走mutations只是单纯的改变了状态而没有改变vuex里面的状态
