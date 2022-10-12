import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsCreateNestedOneWithoutStat_hint_namesInput } from '../stat-hints/stat-hints-create-nested-one-without-stat-hint-names.input';

@InputType()
export class stat_hint_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => stat_hintsCreateNestedOneWithoutStat_hint_namesInput, {nullable:false})
    stat_hints!: stat_hintsCreateNestedOneWithoutStat_hint_namesInput;
}
