import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesUpdateInput } from '../stat-hint-names/stat-hint-names-update.input';
import { Type } from 'class-transformer';
import { stat_hint_namesWhereUniqueInput } from '../stat-hint-names/stat-hint-names-where-unique.input';

@ArgsType()
export class UpdateOnestatHintNamesArgs {

    @Field(() => stat_hint_namesUpdateInput, {nullable:false})
    @Type(() => stat_hint_namesUpdateInput)
    data!: stat_hint_namesUpdateInput;

    @Field(() => stat_hint_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_hint_namesWhereUniqueInput)
    where!: stat_hint_namesWhereUniqueInput;
}
