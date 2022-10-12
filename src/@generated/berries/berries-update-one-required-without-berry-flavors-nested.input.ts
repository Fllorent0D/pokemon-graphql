import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutBerry_flavorsInput } from './berries-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutBerry_flavorsInput } from './berries-create-or-connect-without-berry-flavors.input';
import { berriesUpsertWithoutBerry_flavorsInput } from './berries-upsert-without-berry-flavors.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';
import { berriesUpdateWithoutBerry_flavorsInput } from './berries-update-without-berry-flavors.input';

@InputType()
export class berriesUpdateOneRequiredWithoutBerry_flavorsNestedInput {

    @Field(() => berriesCreateWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => berriesCreateWithoutBerry_flavorsInput)
    create?: berriesCreateWithoutBerry_flavorsInput;

    @Field(() => berriesCreateOrConnectWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutBerry_flavorsInput)
    connectOrCreate?: berriesCreateOrConnectWithoutBerry_flavorsInput;

    @Field(() => berriesUpsertWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => berriesUpsertWithoutBerry_flavorsInput)
    upsert?: berriesUpsertWithoutBerry_flavorsInput;

    @Field(() => berriesWhereUniqueInput, {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    connect?: berriesWhereUniqueInput;

    @Field(() => berriesUpdateWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => berriesUpdateWithoutBerry_flavorsInput)
    update?: berriesUpdateWithoutBerry_flavorsInput;
}
