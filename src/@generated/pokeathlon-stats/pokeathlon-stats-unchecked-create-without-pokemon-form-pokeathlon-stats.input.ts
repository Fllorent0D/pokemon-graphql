import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { nature_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-unchecked-create-nested-many-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesUncheckedCreateNestedManyWithoutPokeathlon_statsInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-unchecked-create-nested-many-without-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsUncheckedCreateWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => nature_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    nature_pokeathlon_stats?: nature_pokeathlon_statsUncheckedCreateNestedManyWithoutPokeathlon_statsInput;

    @Field(() => pokeathlon_stat_namesUncheckedCreateNestedManyWithoutPokeathlon_statsInput, {nullable:true})
    pokeathlon_stat_names?: pokeathlon_stat_namesUncheckedCreateNestedManyWithoutPokeathlon_statsInput;
}
