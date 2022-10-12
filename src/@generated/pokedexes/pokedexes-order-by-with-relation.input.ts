import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { regionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';
import { generationsOrderByRelationAggregateInput } from '../generations/generations-order-by-relation-aggregate.input';
import { pokedex_proseOrderByRelationAggregateInput } from '../pokedex-prose/pokedex-prose-order-by-relation-aggregate.input';
import { pokemon_dex_numbersOrderByRelationAggregateInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-order-by-relation-aggregate.input';
import { version_groupsOrderByRelationAggregateInput } from '../version-groups/version-groups-order-by-relation-aggregate.input';

@InputType()
export class pokedexesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => regionsOrderByWithRelationInput, {nullable:true})
    regions?: regionsOrderByWithRelationInput;

    @Field(() => generationsOrderByRelationAggregateInput, {nullable:true})
    generations?: generationsOrderByRelationAggregateInput;

    @Field(() => pokedex_proseOrderByRelationAggregateInput, {nullable:true})
    pokedex_prose?: pokedex_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_dex_numbersOrderByRelationAggregateInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersOrderByRelationAggregateInput;

    @Field(() => version_groupsOrderByRelationAggregateInput, {nullable:true})
    version_groups?: version_groupsOrderByRelationAggregateInput;
}
