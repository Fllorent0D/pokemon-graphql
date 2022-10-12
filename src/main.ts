import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaService } from "./database/prisma.service";
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  app.use('/voyager', voyagerMiddleware({endpointUrl: '/graphql'}))
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}

bootstrap();
