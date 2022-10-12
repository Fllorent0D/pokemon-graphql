import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { pokemonOrderByWithRelationInput } from '../pokemon/pokemon-order-by-with-relation.input';
import { pokemon_form_namesOrderByRelationAggregateInput } from '../pokemon-form-names/pokemon-form-names-order-by-relation-aggregate.input';
import { pokemon_form_pokeathlon_statsOrderByRelationAggregateInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-order-by-relation-aggregate.input';

@InputType()
export class pokemon_formsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    introduced_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => version_groupsOrderByWithRelationInput, {nullable:true})
    version_groups?: version_groupsOrderByWithRelationInput;

    @Field(() => pokemonOrderByWithRelationInput, {nullable:true})
    pokemon?: pokemonOrderByWithRelationInput;

    @Field(() => pokemon_form_namesOrderByRelationAggregateInput, {nullable:true})
    pokemon_form_names?: pokemon_form_namesOrderByRelationAggregateInput;

    @Field(() => pokemon_form_pokeathlon_statsOrderByRelationAggregateInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsOrderByRelationAggregateInput;
}
