import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { egg_groupsOrderByWithRelationInput } from '../egg-groups/egg-groups-order-by-with-relation.input';
import { pokemon_speciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';

@InputType()
export class pokemon_egg_groupsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: keyof typeof SortOrder;

    @Field(() => egg_groupsOrderByWithRelationInput, {nullable:true})
    egg_groups?: egg_groupsOrderByWithRelationInput;

    @Field(() => pokemon_speciesOrderByWithRelationInput, {nullable:true})
    pokemon_species?: pokemon_speciesOrderByWithRelationInput;
}
