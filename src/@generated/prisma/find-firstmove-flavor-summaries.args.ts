import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesWhereInput } from '../move-flavor-summaries/move-flavor-summaries-where.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesOrderByWithRelationInput } from '../move-flavor-summaries/move-flavor-summaries-order-by-with-relation.input';
import { move_flavor_summariesWhereUniqueInput } from '../move-flavor-summaries/move-flavor-summaries-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_flavor_summariesScalarFieldEnum } from './move-flavor-summaries-scalar-field.enum';

@ArgsType()
export class FindFirstmoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesWhereInput, {nullable:true})
    @Type(() => move_flavor_summariesWhereInput)
    where?: move_flavor_summariesWhereInput;

    @Field(() => [move_flavor_summariesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_flavor_summariesOrderByWithRelationInput>;

    @Field(() => move_flavor_summariesWhereUniqueInput, {nullable:true})
    cursor?: move_flavor_summariesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_flavor_summariesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_flavor_summariesScalarFieldEnum>;
}
