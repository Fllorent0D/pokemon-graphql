import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { contest_typesCreateNestedOneWithoutBerry_flavorsInput } from '../contest-types/contest-types-create-nested-one-without-berry-flavors.input';
import { berriesCreateNestedOneWithoutBerry_flavorsInput } from '../berries/berries-create-nested-one-without-berry-flavors.input';

@InputType()
export class berry_flavorsCreateInput {

    @Field(() => Int, {nullable:false})
    flavor!: number;

    @Field(() => contest_typesCreateNestedOneWithoutBerry_flavorsInput, {nullable:false})
    contest_types!: contest_typesCreateNestedOneWithoutBerry_flavorsInput;

    @Field(() => berriesCreateNestedOneWithoutBerry_flavorsInput, {nullable:false})
    berries!: berriesCreateNestedOneWithoutBerry_flavorsInput;
}
