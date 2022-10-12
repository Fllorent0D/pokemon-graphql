import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutPokeathlon_stat_namesInput } from '../languages/languages-create-nested-one-without-pokeathlon-stat-names.input';

@InputType()
export class pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutPokeathlon_stat_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutPokeathlon_stat_namesInput;
}
