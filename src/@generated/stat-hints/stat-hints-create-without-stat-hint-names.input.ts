import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { statsCreateNestedOneWithoutStat_hintsInput } from '../stats/stats-create-nested-one-without-stat-hints.input';

@InputType()
export class stat_hintsCreateWithoutStat_hint_namesInput {

    @Field(() => Int, {nullable:false})
    gene_mod_5!: number;

    @Field(() => statsCreateNestedOneWithoutStat_hintsInput, {nullable:false})
    stats!: statsCreateNestedOneWithoutStat_hintsInput;
}
