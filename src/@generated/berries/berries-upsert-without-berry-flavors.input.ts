import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesUpdateWithoutBerry_flavorsInput } from './berries-update-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { berriesCreateWithoutBerry_flavorsInput } from './berries-create-without-berry-flavors.input';

@InputType()
export class berriesUpsertWithoutBerry_flavorsInput {

    @Field(() => berriesUpdateWithoutBerry_flavorsInput, {nullable:false})
    @Type(() => berriesUpdateWithoutBerry_flavorsInput)
    update!: berriesUpdateWithoutBerry_flavorsInput;

    @Field(() => berriesCreateWithoutBerry_flavorsInput, {nullable:false})
    @Type(() => berriesCreateWithoutBerry_flavorsInput)
    create!: berriesCreateWithoutBerry_flavorsInput;
}
