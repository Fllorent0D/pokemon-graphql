import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { stat_hint_namesCreateNestedManyWithoutStat_hintsInput } from '../stat-hint-names/stat-hint-names-create-nested-many-without-stat-hints.input';

@InputType()
export class stat_hintsCreateWithoutStatsInput {

    @Field(() => Int, {nullable:false})
    gene_mod_5!: number;

    @Field(() => stat_hint_namesCreateNestedManyWithoutStat_hintsInput, {nullable:true})
    stat_hint_names?: stat_hint_namesCreateNestedManyWithoutStat_hintsInput;
}
