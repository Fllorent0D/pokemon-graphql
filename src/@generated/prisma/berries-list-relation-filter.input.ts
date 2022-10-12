import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereInput } from '../berries/berries-where.input';

@InputType()
export class BerriesListRelationFilter {

    @Field(() => berriesWhereInput, {nullable:true})
    every?: berriesWhereInput;

    @Field(() => berriesWhereInput, {nullable:true})
    some?: berriesWhereInput;

    @Field(() => berriesWhereInput, {nullable:true})
    none?: berriesWhereInput;
}
