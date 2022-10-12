import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { generationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { ability_changelogOrderByRelationAggregateInput } from '../ability-changelog/ability-changelog-order-by-relation-aggregate.input';
import { ability_flavor_textOrderByRelationAggregateInput } from '../ability-flavor-text/ability-flavor-text-order-by-relation-aggregate.input';
import { ability_namesOrderByRelationAggregateInput } from '../ability-names/ability-names-order-by-relation-aggregate.input';
import { ability_proseOrderByRelationAggregateInput } from '../ability-prose/ability-prose-order-by-relation-aggregate.input';
import { pokemon_abilitiesOrderByRelationAggregateInput } from '../pokemon-abilities/pokemon-abilities-order-by-relation-aggregate.input';

@InputType()
export class abilitiesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => generationsOrderByWithRelationInput, {nullable:true})
    generations?: generationsOrderByWithRelationInput;

    @Field(() => ability_changelogOrderByRelationAggregateInput, {nullable:true})
    ability_changelog?: ability_changelogOrderByRelationAggregateInput;

    @Field(() => ability_flavor_textOrderByRelationAggregateInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textOrderByRelationAggregateInput;

    @Field(() => ability_namesOrderByRelationAggregateInput, {nullable:true})
    ability_names?: ability_namesOrderByRelationAggregateInput;

    @Field(() => ability_proseOrderByRelationAggregateInput, {nullable:true})
    ability_prose?: ability_proseOrderByRelationAggregateInput;

    @Field(() => pokemon_abilitiesOrderByRelationAggregateInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesOrderByRelationAggregateInput;
}
