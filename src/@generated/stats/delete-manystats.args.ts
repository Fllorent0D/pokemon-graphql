import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { statsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManystatsArgs {

    @Field(() => statsWhereInput, {nullable:true})
    @Type(() => statsWhereInput)
    where?: statsWhereInput;
}
