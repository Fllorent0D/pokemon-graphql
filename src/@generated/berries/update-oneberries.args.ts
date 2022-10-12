import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berriesUpdateInput } from './berries-update.input';
import { Type } from 'class-transformer';
import { berriesWhereUniqueInput } from './berries-where-unique.input';

@ArgsType()
export class UpdateOneberriesArgs {

    @Field(() => berriesUpdateInput, {nullable:false})
    @Type(() => berriesUpdateInput)
    data!: berriesUpdateInput;

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;
}
