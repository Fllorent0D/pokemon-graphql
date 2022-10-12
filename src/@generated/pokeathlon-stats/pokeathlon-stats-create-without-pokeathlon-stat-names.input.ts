import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-create-nested-many-without-pokeathlon-stats.input';
import { pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput } from '../pokemon-form-pokeathlon-stats/pokemon-form-pokeathlon-stats-create-nested-many-without-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsCreateWithoutPokeathlon_stat_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => nature_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput;

    @Field(() => pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    pokemon_form_pokeathlon_stats?: pokemon_form_pokeathlon_statsCreateNestedManyWithoutPokeathlon_statsInput;
}
