import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-create-nested-many-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesCreateNestedManyWithoutPokeathlon_statsInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-create-nested-many-without-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => nature_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput;

    @Field(() => pokeathlon_stat_namesCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesCreateNestedManyWithoutPokeathlon_statsInput;
}
