import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesCreateWithoutBerry_firmnessInput } from './berries-create-without-berry-firmness.input';

@InputType()
export class berriesCreateOrConnectWithoutBerry_firmnessInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesCreateWithoutBerry_firmnessInput, {nullable:false})
    @Type(() => berriesCreateWithoutBerry_firmnessInput)
    create!: berriesCreateWithoutBerry_firmnessInput;
}
