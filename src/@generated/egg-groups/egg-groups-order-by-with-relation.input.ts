import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { egg_group_proseOrderByRelationAggregateInput } from '../egg-group-prose/egg-group-prose-order-by-relation-aggregate.input';
import { pokemon_egg_groupsOrderByRelationAggregateInput } from '../pokemon-egg-groups/pokemon-egg-groups-order-by-relation-aggregate.input';

@InputType()
export class egg_groupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => egg_group_proseOrderByRelationAggregateInput, {nullable:true})
    egg_group_prose?: egg_group_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_egg_groupsOrderByRelationAggregateInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsOrderByRelationAggregateInput;
}
