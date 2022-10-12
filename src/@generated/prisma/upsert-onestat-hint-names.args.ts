import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesWhereUniqueInput } from '../stat-hint-names/stat-hint-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hint_namesCreateInput } from '../stat-hint-names/stat-hint-names-create.input';
import { stat_hint_namesUpdateInput } from '../stat-hint-names/stat-hint-names-update.input';

@ArgsType()
export class UpsertOnestatHintNamesArgs {

    @Field(() => stat_hint_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_hint_namesWhereUniqueInput)
    where!: stat_hint_namesWhereUniqueInput;

    @Field(() => stat_hint_namesCreateInput, {nullable:false})
    @Type(() => stat_hint_namesCreateInput)
    create!: stat_hint_namesCreateInput;

    @Field(() => stat_hint_namesUpdateInput, {nullable:false})
    @Type(() => stat_hint_namesUpdateInput)
    update!: stat_hint_namesUpdateInput;
}
