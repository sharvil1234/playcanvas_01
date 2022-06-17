var Coin = pc.createScript('coin');

Coin.prototype.initialize = function () {
    this.entity.collision.on('triggerenter', this.onCollision, this);
};

Coin.prototype.onCollision = function (event) {
    this.app.fire('Overlay:CoinCount');
    this.entity.destroy();
};