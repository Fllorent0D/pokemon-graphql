import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}

bootstrap();
