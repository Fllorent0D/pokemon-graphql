import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesScalarWhereInput } from './stat-hint-names-scalar-where.input';
import { Type } from 'class-transformer';
import { stat_hint_namesUpdateManyMutationInput } from './stat-hint-names-update-many-mutation.input';

@InputType()
export class stat_hint_namesUpdateManyWithWhereWithoutStat_hintsInput {

    @Field(() => stat_hint_namesScalarWhereInput, {nullable:false})
    @Type(() => stat_hint_namesScalarWhereInput)
    where!: stat_hint_namesScalarWhereInput;

    @Field(() => stat_hint_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => stat_hint_namesUpdateManyMutationInput)
    data!: stat_hint_namesUpdateManyMutationInput;
}
