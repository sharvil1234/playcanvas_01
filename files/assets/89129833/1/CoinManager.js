var CoinManager = pc.createScript('coinManager');

CoinManager.attributes.add('coinEntity', {type : 'entity'});
CoinManager.attributes.add('count', {type : 'number', default : 10});

CoinManager.prototype.initialize = function() {
    this.coinEntity.enabled = false;

    for(var i = 0;  i < this.count; i++){
        posX = Math.random() * 10 - Math.random() * 10;
        posY = 1;
        posZ = Math.random() * 10 - Math.random() * 10;

        var coin = this.coinEntity.clone();
        
        coin.enabled = true;
        coin.setPosition(posX, posY, posZ);
        
        this.entity.addChild(coin);
    }
};