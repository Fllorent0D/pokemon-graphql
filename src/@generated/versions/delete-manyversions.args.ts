import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { versionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyversionsArgs {

    @Field(() => versionsWhereInput, {nullable:true})
    @Type(() => versionsWhereInput)
    where?: versionsWhereInput;
}
