import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { generationsOrderByRelationAggregateInput } from '../generations/generations-order-by-relation-aggregate.input';
import { locationsOrderByRelationAggregateInput } from '../locations/locations-order-by-relation-aggregate.input';
import { pokedexesOrderByRelationAggregateInput } from '../pokedexes/pokedexes-order-by-relation-aggregate.input';
import { region_namesOrderByRelationAggregateInput } from '../region-names/region-names-order-by-relation-aggregate.input';
import { version_group_regionsOrderByRelationAggregateInput } from '../version-group-regions/version-group-regions-order-by-relation-aggregate.input';

@InputType()
export class regionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => generationsOrderByRelationAggregateInput, {nullable:true})
    generations?: generationsOrderByRelationAggregateInput;

    @Field(() => locationsOrderByRelationAggregateInput, {nullable:true})
    locations?: locationsOrderByRelationAggregateInput;

    @Field(() => pokedexesOrderByRelationAggregateInput, {nullable:true})
    pokedexes?: pokedexesOrderByRelationAggregateInput;

    @Field(() => region_namesOrderByRelationAggregateInput, {nullable:true})
    region_names?: region_namesOrderByRelationAggregateInput;

    @Field(() => version_group_regionsOrderByRelationAggregateInput, {nullable:true})
    version_group_regions?: version_group_regionsOrderByRelationAggregateInput;
}
