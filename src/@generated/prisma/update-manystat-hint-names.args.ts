import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesUpdateManyMutationInput } from '../stat-hint-names/stat-hint-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { stat_hint_namesWhereInput } from '../stat-hint-names/stat-hint-names-where.input';

@ArgsType()
export class UpdateManystatHintNamesArgs {

    @Field(() => stat_hint_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => stat_hint_namesUpdateManyMutationInput)
    data!: stat_hint_namesUpdateManyMutationInput;

    @Field(() => stat_hint_namesWhereInput, {nullable:true})
    @Type(() => stat_hint_namesWhereInput)
    where?: stat_hint_namesWhereInput;
}
