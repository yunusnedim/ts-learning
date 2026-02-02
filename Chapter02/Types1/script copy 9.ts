interface AppointmentInterface {
  startTime: Date;
  endTime: Date;
  description: string;

  print(): void;
}

abstract class AppointmentAbstract {
  protected startTime: Date;
  protected endTime: Date;
  protected description: string;

  constructor(arg: Date, arg2: Date, description: string) {
    this.startTime = arg;
    this.endTime = arg2;
    this.description = description;
  }

  public abstract print(): void;
}

class Appointment extends AppointmentAbstract {
  constructor(arg: Date, arg2: Date, description: string) {
    super(arg, arg2, description);
  }

  print() {
    console.log("This is an appointment. Details: \n");
    console.log(this);
  }
}

const a1 = new Appointment(new Date(), new Date(), "test");
a1.print();

// const a2 = new AppointmentAbstract(new Date(), new Date(), "test");
