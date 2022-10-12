import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { berriesCreateWithoutBerry_flavorsInput } from './berries-create-without-berry-flavors.input';

@InputType()
export class berriesCreateOrConnectWithoutBerry_flavorsInput {

    @Field(() => berriesWhereUniqueInput, {nullable:false})
    @Type(() => berriesWhereUniqueInput)
    where!: berriesWhereUniqueInput;

    @Field(() => berriesCreateWithoutBerry_flavorsInput, {nullable:false})
    @Type(() => berriesCreateWithoutBerry_flavorsInput)
    create!: berriesCreateWithoutBerry_flavorsInput;
}
