const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div 
        className="bg-white shadow-2xl relative overflow-hidden"
        style={{ 
          width: '210mm',
          height: '297mm',
          maxWidth: '100%',
          maxHeight: '100vh'
        }}
      >
        <div 
          className="absolute bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/files/f49f3b43-cc34-4a09-bc0a-07952a83aeb1.jpeg)',
            backgroundPosition: 'center top',
            filter: 'brightness(0.95)',
            top: '20mm',
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        
        <div className="relative h-full flex flex-col justify-between p-12">
          <div className="text-center">
            <div className="inline-block bg-white/95 backdrop-blur-sm px-8 py-3 mb-3">
              <h2 className="text-3xl font-light tracking-[0.3em] text-neutral-800">
                Я ТОЛЬКО НАЧИНАЮ
              </h2>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-white/95 backdrop-blur-sm p-8 space-y-4">
              <h1 className="text-6xl font-light tracking-wide text-neutral-900 mb-6">
                КАРИНА МИНОР
              </h1>
              
              <div className="h-px bg-gradient-to-r from-primary via-primary to-transparent mb-6"></div>
              
              <div className="space-y-3 text-neutral-800">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm uppercase tracking-wider text-neutral-600 w-20">Дата</span>
                  <span className="text-2xl font-light">15 декабря</span>
                </div>
                
                <div className="flex items-baseline gap-3">
                  <span className="text-sm uppercase tracking-wider text-neutral-600 w-20">Время</span>
                  <span className="text-2xl font-light">19:00</span>
                </div>
                
                <div className="flex items-baseline gap-3">
                  <span className="text-sm uppercase tracking-wider text-neutral-600 w-20">Место</span>
                  <div>
                    <p className="text-2xl font-light">Ресторан «Кобзарь»</p>
                    <p className="text-sm text-neutral-600 mt-1">ул. Михайлова, 29, корпус 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;