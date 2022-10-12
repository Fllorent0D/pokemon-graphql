import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berriesCreateInput } from './berries-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneberriesArgs {

    @Field(() => berriesCreateInput, {nullable:false})
    @Type(() => berriesCreateInput)
    data!: berriesCreateInput;
}
