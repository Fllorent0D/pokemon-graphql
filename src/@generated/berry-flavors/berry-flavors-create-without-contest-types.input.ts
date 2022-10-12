import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berriesCreateNestedOneWithoutBerry_flavorsInput } from '../berries/berries-create-nested-one-without-berry-flavors.input';

@InputType()
export class berry_flavorsCreateWithoutContest_typesInput {

    @Field(() => Int, {nullable:false})
    flavor!: number;

    @Field(() => berriesCreateNestedOneWithoutBerry_flavorsInput, {nullable:false})
    berries!: berriesCreateNestedOneWithoutBerry_flavorsInput;
}
