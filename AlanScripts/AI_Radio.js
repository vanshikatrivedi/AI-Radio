// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});

intent ('play $(CHANNEL* (.*)) fm', p => {
    let channel = project.radios.filter(x=> x.name.toLowerCase() === p.CHANNEL.value.toLowerCAse())[0];
    try{
        p.play({"command":"play_channel", "id": channel.id});
        p.play("(Playing Now | on it | okay doing it)");
    }catch(err){
        console.log("Can't play");
        p.play("I can't play this");
    }
});

intent ('play (some|) $(CATEGORY* (.*)) (music|)', p => {
    let channel = project.radios.filter(x=> x.category.toLowerCase() === p.CATEGORY.value.toLowerCAse.value.toLowerCAse())[0];
    try{
        p.play({"command":"play_channel", "id": channel.id});
        p.play("(Playing Now | on it | okay doing it)");
    }catch(error){
        console.log("Can't play");
        p.play("Couldn't find this genre");
    }
});

intent('(play)','play (the|) (some|) music', p => {
    p.play({"command" : "play"});
    p.play("(Playing Now | on it | okay doing it)");
});

intent('stop (it|)','stop (the|) music','pause (it|)','pause (the|) music', p => {
    p.play({"command" : "stop"});
    p.play("(Stoping Now | on it | okay doing it)");
});

intent('(play|) next (channel|fm|radio|music|track)', p => {
    p.play({"command" : "next"});
    p.play("(on it | okay doing it | playing next)");
});

intent('(play|) previous (channel|fm|radio|music|track)', p => {
    p.play({"command" : "prev"});
    p.play("(on it | okay doing it | playing previous)");
});