import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsCreateNestedOneWithoutPokeathlon_stat_namesInput } from '../pokeathlon-stats/pokeathlon-stats-create-nested-one-without-pokeathlon-stat-names.input';

@InputType()
export class pokeathlon_stat_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => pokeathlon_statsCreateNestedOneWithoutPokeathlon_stat_namesInput, {nullable:false})
    pokeathlon_stats!: pokeathlon_statsCreateNestedOneWithoutPokeathlon_stat_namesInput;
}
