import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutStat_namesInput } from '../languages/languages-create-nested-one-without-stat-names.input';
import { statsCreateNestedOneWithoutStat_namesInput } from '../stats/stats-create-nested-one-without-stat-names.input';

@InputType()
export class stat_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutStat_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutStat_namesInput;

    @Field(() => statsCreateNestedOneWithoutStat_namesInput, {nullable:false})
    stats!: statsCreateNestedOneWithoutStat_namesInput;
}
