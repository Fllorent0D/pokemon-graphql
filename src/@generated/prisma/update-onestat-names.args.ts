import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesUpdateInput } from '../stat-names/stat-names-update.input';
import { Type } from 'class-transformer';
import { stat_namesWhereUniqueInput } from '../stat-names/stat-names-where-unique.input';

@ArgsType()
export class UpdateOnestatNamesArgs {

    @Field(() => stat_namesUpdateInput, {nullable:false})
    @Type(() => stat_namesUpdateInput)
    data!: stat_namesUpdateInput;

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;
}
