import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput } from '../egg-groups/egg-groups-update-one-required-without-pokemon-egg-groups-nested.input';

@InputType()
export class pokemon_egg_groupsUpdateWithoutPokemon_speciesInput {

    @Field(() => egg_groupsUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput, {nullable:true})
    egg_groups?: egg_groupsUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput;
}
