import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //DTO(데이터 타입 오브젝트) 타입검사
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,              //오브젝트가 다들어가있는지 확인
    forbidNonWhitelisted: true,   //다른 값이 들어왔는지 확인
    transform:true,               //타입을 바꿀수있게해줌 ex 파라미터값 id값
  }))
  await app.listen(3000);
}
bootstrap();
