import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutStat_namesInput } from '../languages/languages-create-nested-one-without-stat-names.input';

@InputType()
export class stat_namesCreateWithoutStatsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutStat_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutStat_namesInput;
}
