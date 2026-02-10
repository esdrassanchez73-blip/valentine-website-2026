const CONFIG = {

    valentineName: "Brigitte",
    pageTitle: "Will You Be My Valentine? 💝"

    floatingEmojis: {
        hearts: "['❤️', '💖', '💝', '💗', '💓'],"  
        bears: "['🧸', '🐻']"                       
    },
    questions: {
        first: {
            text: "Do you lob me?"                                    
            yesBtn: "Yes"                                           
            noBtn: "No"                                               
            secretAnswer: "I lob you so much❤️"           
        },
        second: {
            text: "How much do you love me?"                         
            startText: "mucho mucho"                                  
            nextBtn: "I HATE YOU"                                       
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026?", 
            yesBtn: "Yes!"                                             
            noBtn: "FUT NO"                                               
        }
    },

    loveMessages: {
        extreme: "WOOOOW you do lob me"  
        high: "oh chetos"             
        normal: "whattttt"                           
    },

    celebration: {
        title: "oh yea my pookie bear lob me",
        message: "Now come get this dih"
        emojis: "🎁💖🤗💝💋❤️💕"  

    colors: {
        backgroundStart: "#ffafbd",     
        backgroundEnd: "#ffc3a0",       
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"             
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
   // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
