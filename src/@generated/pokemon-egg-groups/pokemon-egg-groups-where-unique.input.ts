import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsSpecies_idEgg_group_idCompoundUniqueInput } from './pokemon-egg-groups-species-id-egg-group-id-compound-unique.input';

@InputType()
export class pokemon_egg_groupsWhereUniqueInput {

    @Field(() => pokemon_egg_groupsSpecies_idEgg_group_idCompoundUniqueInput, {nullable:true})
    species_id_egg_group_id?: pokemon_egg_groupsSpecies_idEgg_group_idCompoundUniqueInput;
}
