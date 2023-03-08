// decoratorは関数
function autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value
}

class projectInput {
  templeteElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  // 要素参照
  constructor() {
    this.templeteElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templeteElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.mandayInputElement = this.element.querySelector(
      "#manday"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInputElement.value);
  }
  // formにイベントリスナ登録
  private configure() {
    // bind thisが参照するべきオブジェクト渡す
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  // 要素追加
  private attach() {
    // 開始タグ直後にテンプレートからインポート
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const pjtInput = new projectInput();
