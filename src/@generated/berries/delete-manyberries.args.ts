import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berriesWhereInput } from './berries-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyberriesArgs {

    @Field(() => berriesWhereInput, {nullable:true})
    @Type(() => berriesWhereInput)
    where?: berriesWhereInput;
}
