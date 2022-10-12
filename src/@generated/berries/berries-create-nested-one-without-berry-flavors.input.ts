import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutBerry_flavorsInput } from './berries-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutBerry_flavorsInput } from './berries-create-or-connect-without-berry-flavors.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class berriesCreateNestedOneWithoutBerry_flavorsInput {

    @Field(() => berriesCreateWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => berriesCreateWithoutBerry_flavorsInput)
    create?: berriesCreateWithoutBerry_flavorsInput;

    @Field(() => berriesCreateOrConnectWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutBerry_flavorsInput)
    connectOrCreate?: berriesCreateOrConnectWithoutBerry_flavorsInput;

    @Field(() => berriesWhereUniqueInput, {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    connect?: berriesWhereUniqueInput;
}
