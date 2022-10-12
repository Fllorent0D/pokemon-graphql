import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesWhereUniqueInput } from '../stat-names/stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_namesCreateInput } from '../stat-names/stat-names-create.input';
import { stat_namesUpdateInput } from '../stat-names/stat-names-update.input';

@ArgsType()
export class UpsertOnestatNamesArgs {

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;

    @Field(() => stat_namesCreateInput, {nullable:false})
    @Type(() => stat_namesCreateInput)
    create!: stat_namesCreateInput;

    @Field(() => stat_namesUpdateInput, {nullable:false})
    @Type(() => stat_namesUpdateInput)
    update!: stat_namesUpdateInput;
}
