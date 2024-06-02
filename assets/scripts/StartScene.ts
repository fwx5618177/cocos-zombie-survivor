import { _decorator, Button, Component, director, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartScene')
export class StartScene extends Component {
    
    @property(Prefab)
    startButton: Prefab | null = null;

    protected onLoad(): void {
        console.log('onLoad:', this.startButton);
        if (this.startButton) {
            this.startButton.on(
                Button.EventType.CLICK,
                this.onStart,
                this
            )
        }
    }

    protected start(): void {
        console.log('start scene');
        
        this.onLoad();
    }

    onStart() {
        console.log('start game');
        director.loadScene('GameScene');
    }

    protected onDestroy(): void {
        if (this.startButton) {
            this.startButton.off(Button.EventType.CLICK);
        }
    }
}

