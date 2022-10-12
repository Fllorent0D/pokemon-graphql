import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { berry_flavorsOrderByRelationAggregateInput } from '../berry-flavors/berry-flavors-order-by-relation-aggregate.input';
import { contest_type_namesOrderByRelationAggregateInput } from '../contest-type-names/contest-type-names-order-by-relation-aggregate.input';
import { movesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { naturesOrderByRelationAggregateInput } from '../natures/natures-order-by-relation-aggregate.input';

@InputType()
export class contest_typesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => berry_flavorsOrderByRelationAggregateInput, {nullable:true})
    berry_flavors?: berry_flavorsOrderByRelationAggregateInput;

    @Field(() => contest_type_namesOrderByRelationAggregateInput, {nullable:true})
    contest_type_names?: contest_type_namesOrderByRelationAggregateInput;

    @Field(() => movesOrderByRelationAggregateInput, {nullable:true})
    moves?: movesOrderByRelationAggregateInput;

    @Field(() => naturesOrderByRelationAggregateInput, {nullable:true})
    natures_contest_typesTonatures_likes_flavor_id?: naturesOrderByRelationAggregateInput;

    @Field(() => naturesOrderByRelationAggregateInput, {nullable:true})
    natures_contest_typesTonatures_hates_flavor_id?: naturesOrderByRelationAggregateInput;
}
