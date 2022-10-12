import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutStat_hint_namesInput } from '../languages/languages-create-nested-one-without-stat-hint-names.input';

@InputType()
export class stat_hint_namesCreateWithoutStat_hintsInput {

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => languagesCreateNestedOneWithoutStat_hint_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutStat_hint_namesInput;
}
