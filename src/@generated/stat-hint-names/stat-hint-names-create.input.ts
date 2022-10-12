import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutStat_hint_namesInput } from '../languages/languages-create-nested-one-without-stat-hint-names.input';
import { stat_hintsCreateNestedOneWithoutStat_hint_namesInput } from '../stat-hints/stat-hints-create-nested-one-without-stat-hint-names.input';

@InputType()
export class stat_hint_namesCreateInput {

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => languagesCreateNestedOneWithoutStat_hint_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutStat_hint_namesInput;

    @Field(() => stat_hintsCreateNestedOneWithoutStat_hint_namesInput, {nullable:false})
    stat_hints!: stat_hintsCreateNestedOneWithoutStat_hint_namesInput;
}
