import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateNestedOneWithoutStat_namesInput } from '../stats/stats-create-nested-one-without-stat-names.input';

@InputType()
export class stat_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => statsCreateNestedOneWithoutStat_namesInput, {nullable:false})
    stats!: statsCreateNestedOneWithoutStat_namesInput;
}
