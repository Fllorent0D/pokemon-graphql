import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesWhereInput } from '../move-flavor-summaries/move-flavor-summaries-where.input';

@InputType()
export class Move_flavor_summariesListRelationFilter {

    @Field(() => move_flavor_summariesWhereInput, {nullable:true})
    every?: move_flavor_summariesWhereInput;

    @Field(() => move_flavor_summariesWhereInput, {nullable:true})
    some?: move_flavor_summariesWhereInput;

    @Field(() => move_flavor_summariesWhereInput, {nullable:true})
    none?: move_flavor_summariesWhereInput;
}
