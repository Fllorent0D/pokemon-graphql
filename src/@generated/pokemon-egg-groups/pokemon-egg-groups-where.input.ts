import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Egg_groupsRelationFilter } from '../prisma/egg-groups-relation-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';

@InputType()
export class pokemon_egg_groupsWhereInput {

    @Field(() => [pokemon_egg_groupsWhereInput], {nullable:true})
    AND?: Array<pokemon_egg_groupsWhereInput>;

    @Field(() => [pokemon_egg_groupsWhereInput], {nullable:true})
    OR?: Array<pokemon_egg_groupsWhereInput>;

    @Field(() => [pokemon_egg_groupsWhereInput], {nullable:true})
    NOT?: Array<pokemon_egg_groupsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    egg_group_id?: IntFilter;

    @Field(() => Egg_groupsRelationFilter, {nullable:true})
    egg_groups?: Egg_groupsRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesRelationFilter;
}
