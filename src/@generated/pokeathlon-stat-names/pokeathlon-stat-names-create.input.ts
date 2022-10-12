import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokeathlon_stat_namesInput } from '../languages/languages-create-nested-one-without-pokeathlon-stat-names.input';
import { pokeathlon_statsCreateNestedOneWithoutPokeathlon_stat_namesInput } from '../pokeathlon-stats/pokeathlon-stats-create-nested-one-without-pokeathlon-stat-names.input';

@InputType()
export class pokeathlon_stat_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutPokeathlon_stat_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokeathlon_stat_namesInput;

    @Field(() => pokeathlon_statsCreateNestedOneWithoutPokeathlon_stat_namesInput, {nullable:false})
    pokeathlon_stats!: pokeathlon_statsCreateNestedOneWithoutPokeathlon_stat_namesInput;
}
