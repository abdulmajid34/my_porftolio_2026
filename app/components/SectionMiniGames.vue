<template>
  <section data-id="mini-games" class="animated-section">
    <div class="page-title">
      <h2>Mini <span>Games</span></h2>
    </div>

    <div class="section-content">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <p>Relax for a moment and play some classic games built with pure Javascript.</p>
          <div class="white-space-30"></div>
          
          <div class="row">
            
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="lm-info-block gray-default game-card">
                <i class="lnr lnr-cross"></i> <h4>Tic Tac Toe</h4>
                <div class="game-action">
                  <a href="/tic-tac-toe.html" target="_blank" class="btn btn-primary">Play Now</a>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="lm-info-block gray-default game-card">
                <i class="lnr lnr-dice"></i>
                <h4>Sudoku</h4>
                <div class="game-action">
                  <a href="/sudoku.html" target="_blank" class="btn btn-primary">Play Now</a>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="lm-info-block gray-default game-card">
                <i class="lnr lnr-layers"></i>
                <h4>Tetris</h4>
                <div class="game-action">
                  <a href="/tetris.html" target="_blank" class="btn btn-primary">Play Now</a>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="lm-info-block gray-default game-card">
                <i class="lnr lnr-keyboard"></i>
                <h4>Typing Master</h4>
                <div class="game-action">
                  <a href="/typing-master.html" target="_blank" class="btn btn-primary">Play Now</a>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="lm-info-block gray-default game-card">
                <i class="lnr lnr-sync"></i>
                <h4>Reversi</h4>
                <div class="game-action">
                  <a href="/reversi.html" target="_blank" class="btn btn-primary">Play Now</a>
                </div>
              </div>
            </div>
            
             <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="lm-info-block gray-default game-card">
                <i class="lnr lnr-music-note"></i>
                <h4>Pianika</h4>
                <div class="game-action">
                  <a href="/pianika.html" target="_blank" class="btn btn-primary">Play Now</a>
                </div>
              </div>
            </div>

             <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="lm-info-block gray-default game-card">
                <i class="lnr lnr-heart"></i>
                <h4>Catinder</h4>
                <div class="game-action">
                  <a href="/catinder.html" target="_blank" class="btn btn-primary">Play Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Sedikit styling tambahan agar kartu game terlihat rapi */
.game-card {
  text-align: center;
  padding: 30px 20px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}
.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.game-card i {
  font-size: 40px;
  margin-bottom: 15px;
  color: #007ced;
  display: block;
}
.game-card h4 {
  margin-bottom: 20px;
}
</style>